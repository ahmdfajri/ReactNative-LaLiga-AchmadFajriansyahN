import React from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import { Container, Left, Body, Text, ListItem, List, Thumbnail } from 'native-base';

class HalamanSatu extends React.Component {

    state = {
        listTeams: ""
    }

    componentDidMount() {
        axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain').then((x) => {
            this.setState({
                listTeams: x.data.teams
            });
        });
    }

    displayTeams() {
        return this.state.listTeams.map((val, i) => {
            var idTeam = val.idTeam;
            var teamName = val.strTeam;
            var teamWebsite = val.strWebsite;
            var teamLogo = val.strTeamBadge

            return (
                <ListItem key={i} avatar onPress={() => {
                    this.props.navigation.navigate("HalamanDua", {
                        idTeam: idTeam,
                        teamName: teamName
                    })
                }}>
                    <Left>
                        <Thumbnail source={{ uri: teamLogo }} />
                    </Left>
                    <Body>
                        <Text>{teamName}</Text>
                        <Text note>{teamWebsite}</Text>
                    </Body>
                </ListItem>
            )
        })
    }

    render() {
        return (
            <Container>
                <ScrollView>
                    <List>
                        {this.state.listTeams ? this.displayTeams() : <Text></Text>}
                    </List>
                </ScrollView>
            </Container>
        )
    }
    
    static navigationOptions = {
        title: "La Liga Teams",image: "teamLogo",
        headerStyle: {
            backgroundColor: "purple"
        },
        headerTintColor: "white"
    }

}

export default HalamanSatu;