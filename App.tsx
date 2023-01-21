import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import AppHeader from './components/AppHeader';
import ChoiceIcon from './components/ChoiceIcon';

enum playerOptions {
  Rock,
  Paper,
  Scissors,
}

class App extends Component {
  state: {
    userChoice?: playerOptions;
    opponentChoice?: playerOptions;
    messageToPlayer?: string;
    startedGame?: boolean;
  };

  constructor(props: string) {
    super(props);
    this.state = {};
  }

  setOpponetChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
  };

  setWinner = (userChoice: playerOptions, opponentChoice: playerOptions) => {
    try {
      let winner = '';
      if (opponentChoice === userChoice) {
        winner = 'Draw';
      } else {
        if (
          opponentChoice === playerOptions.Rock &&
          userChoice === playerOptions.Scissors
        ) {
          winner = 'You lose!';
        } else if (
          opponentChoice === playerOptions.Scissors &&
          userChoice === playerOptions.Paper
        ) {
          winner = 'You lose!';
        } else if (
          opponentChoice === playerOptions.Paper &&
          userChoice === playerOptions.Rock
        ) {
          winner = 'You lose!';
        } else {
          winner = 'You win!';
        }
      }

      this.setState({
        userChoice: playerOptions[userChoice],
        opponentChoice: playerOptions[opponentChoice],
        messageToPlayer: winner,
        startedGame: true,
      });
    } catch (error) {
      console.log('Error has occurred', error);
    }
  };

  jokenPo = (userChoice: playerOptions) => {
    this.setWinner(userChoice, this.setOpponetChoice());
  };

  render(): React.ReactNode {
    return (
      <View style={styles.viewBackgroud}>
        <AppHeader />
        <View style={styles.informations}>
          {!this.state.startedGame && (
            <View style={styles.viewInfo}>
              <Text style={styles.txtInitialInfo}>
                To start, select an option bellow
              </Text>
            </View>
          )}
          {this.state.startedGame && (
            <>
              <Text style={styles.txtResult}>{this.state.messageToPlayer}</Text>
              <ChoiceIcon
                selectedItem={this.state.opponentChoice?.toString()}
              />
              <Text style={styles.txtChoice}>
                Opponent: {this.state.opponentChoice}
              </Text>
              <ChoiceIcon selectedItem={this.state.userChoice?.toString()} />
              <Text style={styles.txtChoice}>You: {this.state.userChoice}</Text>
            </>
          )}
        </View>
        <View style={[styles.actionPanel]}>
          <View style={[styles.btnPlayerChoice]}>
            <Button
              color={'#FFD270'}
              title="Rock"
              onPress={() => {
                this.jokenPo(playerOptions.Rock);
              }}
            />
          </View>

          <View style={styles.btnPlayerChoice}>
            <Button
              color={'#F1B1BF'}
              title="Paper"
              onPress={() => {
                this.jokenPo(playerOptions.Paper);
              }}
            />
          </View>

          <View style={styles.btnPlayerChoice}>
            <Button
              color={'#ACCC8B'}
              title="Scissors"
              onPress={() => {
                this.jokenPo(playerOptions.Scissors);
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBackgroud: {
    width: '100%',
    height: '100%',
  },
  btnPlayerChoice: {
    width: 90,
  },
  actionPanel: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-between',
  },
  informations: {
    alignItems: 'center',
    height: '50%',
    borderWidth: 0.5,
  },
  txtResult: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 40,
    paddingTop: 40,
  },
  txtChoice: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
  },
  txtInitialInfo: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 100,
  },
  viewInfo: {
    top: '25%',
  },
});

export default App;
