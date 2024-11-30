import React, { useState } from 'react';
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { LinearGradient } from 'expo-linear-gradient';

const imagePaths = {
  A: require('../assets/images/categories/quiz/blank_alphabets/A.png'),
  B: require('../assets/images/categories/quiz/blank_alphabets/B.png'),
  C: require('../assets/images/categories/quiz/blank_alphabets/C.png'),
  D: require('../assets/images/categories/quiz/blank_alphabets/D.png'),
  E: require('../assets/images/categories/quiz/blank_alphabets/E.png'),
  F: require('../assets/images/categories/quiz/blank_alphabets/F.png'),
  G: require('../assets/images/categories/quiz/blank_alphabets/G.png'),
  H: require('../assets/images/categories/quiz/blank_alphabets/H.png'),
  I: require('../assets/images/categories/quiz/blank_alphabets/I.png'),
  J: require('../assets/images/categories/quiz/blank_alphabets/J.png'),
  K: require('../assets/images/categories/quiz/blank_alphabets/K.png'),
  L: require('../assets/images/categories/quiz/blank_alphabets/L.png'),
  M: require('../assets/images/categories/quiz/blank_alphabets/M.png'),
  N: require('../assets/images/categories/quiz/blank_alphabets/N.png'),
  O: require('../assets/images/categories/quiz/blank_alphabets/O.png'),
  P: require('../assets/images/categories/quiz/blank_alphabets/P.png'),
  Q: require('../assets/images/categories/quiz/blank_alphabets/Q.png'),
  R: require('../assets/images/categories/quiz/blank_alphabets/R.png'),
  S: require('../assets/images/categories/quiz/blank_alphabets/S.png'),
  T: require('../assets/images/categories/quiz/blank_alphabets/T.png'),
  U: require('../assets/images/categories/quiz/blank_alphabets/U.png'),
  V: require('../assets/images/categories/quiz/blank_alphabets/V.png'),
  W: require('../assets/images/categories/quiz/blank_alphabets/W.png'),
  X: require('../assets/images/categories/quiz/blank_alphabets/X.png'),
  Y: require('../assets/images/categories/quiz/blank_alphabets/Y.png'),
  Z: require('../assets/images/categories/quiz/blank_alphabets/Z.png'),
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateAlphabetQuiz = () => {
  const question = [];
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const randomalps = shuffleArray([...alphabet]);  // Assuming shuffleArray is a function you have defined elsewhere
  randomalps.forEach((letter) => {
    const correctAnswer = letter;
    const options = generateRandomOptions(correctAnswer, alphabet);
    question.push({
      title: correctAnswer,
      imageSource: imagePaths[correctAnswer],
      options,
      correctAnswer,
    });
  });

  return shuffleArray(question);  // Shuffle the final array of questions
};

function generateRandomOptions(correctAnswer, alphabet) {
  const optionsSet = new Set();
  optionsSet.add(correctAnswer);

  while (optionsSet.size < 4) {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    optionsSet.add(randomLetter);
  }

  return Array.from(optionsSet).sort(() => Math.random() - 0.5);
}

export default function FlashCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const [alphabetQuizData, setAlphabetQuizData] = useState(generateAlphabetQuiz); // Initialize quiz data on load
  const currentQuiz = alphabetQuizData[currentIndex];

  const handleAnswer = (answer) => {
    if (answer === currentQuiz.correctAnswer) {
      const newScore = score + 1;
      setScore(newScore);

      if (newScore === 10) {
        setIsGameWon(true);
      } else {
        setIsAnswerRight(true);
        // Alert.alert('Correct!', `You selected the right answer: ${answer}`);
      }
    } else {
      const newHearts = hearts - 1;
      setHearts(newHearts);

      if (newHearts === 0) {
        setIsGameOver(true);
      } else {
        setIsAnswerWrong(true);
        // Alert.alert('Wrong!', `The correct answer was: ${currentQuiz.correctAnswer}`);
      }
    }
  };
  const nextQuestion = () => {
    const nextIndex = (currentIndex + 1) % alphabetQuizData.length;
    setCurrentIndex(nextIndex);
  }

  const resetGame = () => {
    setAlphabetQuizData(generateAlphabetQuiz()); // Generate new quiz data for a new game
    setScore(0);
    setHearts(3);
    setCurrentIndex(0);
    setIsGameOver(false);
    setIsGameWon(false);
    setIsGameStarted(false);
    setIsAnswerRight(false);
    setIsAnswerWrong(false);
  };

  return (
    <View style={styles.bgcontainer}>
      <LinearGradient
        style={styles.bgcontainer}
        colors={['#ff0070', '#6fb7ff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        {/* Starting Modal */}
        <Modal visible={!isGameStarted} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ThemedText style={[styles.modalTitle, styles.green]}>Welcome to the FLASH CARD QUIZ!</ThemedText>
              <ThemedText style={styles.modalText}>
                Guess the signs correctly to reach a score of 10.
                But Be careful! You have only 3 hearts.
              </ThemedText>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsGameStarted(true)}
              >
                <ThemedText style={styles.modalButtonText}>Start Game</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>


        {/* Win Modal */}
        <Modal visible={isGameWon} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ThemedText style={[styles.modalTitle, styles.green]}>You Win!</ThemedText>
              <ThemedText style={styles.modalText}>
                Congratulations! You answered all questions correctly!
              </ThemedText>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={resetGame}
              >
                <ThemedText style={styles.modalButtonText}>Play Again</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Right Modal */}
        <Modal visible={isAnswerRight} transparent animationType="slide">
          <View style={[styles.right, styles.modalContainerFeedback]}>
            <View style={styles.modalContentFeedback}>
              <ThemedText style={styles.textFeedBack}>YOUR ANSWER IS CORRECT!</ThemedText>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setIsAnswerRight(false);
                  nextQuestion();
                }}  // Corrected to pass a function
              >
                <ThemedText style={styles.modalButtonText}>OK</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>


        {/* Wrong Modal */}
        <Modal visible={isAnswerWrong} transparent animationType="slide">
          <View style={[styles.wrong, styles.modalContainerFeedback]}>
            <View style={styles.modalContentFeedback}>
              <ThemedText style={styles.textFeedBack}>NOOOO ITS WRONG!</ThemedText>
              <ThemedText style={styles.subtextFeedBack}>The correct answer is {currentQuiz.correctAnswer}</ThemedText>
              <TouchableOpacity
                style={styles.modalButtonWrong}
                onPress={() => {
                  setIsAnswerWrong(false);
                  nextQuestion();
                }}  // Corrected to pass a function
              >
                <ThemedText style={styles.modalButtonText}>OK</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Lose Modal */}
        <Modal visible={isGameOver} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ThemedText style={[styles.modalTitle, styles.gameover]}>Game Over</ThemedText>
              <ThemedText style={styles.modalText}>
                You ran out of hearts. Try again!
              </ThemedText>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={resetGame}
              >
                <ThemedText style={styles.modalButtonText}>Retry</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {isGameStarted && (
          <>
            <View style={styles.headerContainer}>
              <View style={styles.header}>
                <ThemedText style={styles.scoreText}>Score: {score}</ThemedText>
                <ThemedText style={styles.scoreText}>
                  Hearts: {'♥'.repeat(hearts)}
                </ThemedText>
              </View>
            </View>
            <View style={styles.container}>
              <Image
                source={currentQuiz.imageSource}
                style={styles.image} />
            </View>
            <View style={styles.optionContainer}>
              {currentQuiz.options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.choice}
                  onPress={() => handleAnswer(option)}
                >
                  <ThemedText style={styles.text}>{option}</ThemedText>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </LinearGradient>
    </View >
  );
}

const styles = StyleSheet.create({
  bgcontainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 2,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: '#d9d9d8',
    borderRadius: 11,
    marginTop: 30,
    marginBottom: 0,
    width: '94%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginTop: 10,
    width: '94%',
    height: '40%',
    backgroundColor: '#d9d9d8',
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: 'contain',
  },
  optionContainer: {
    marginTop: 20,
    width: '94%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  choice: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 4,
    width: '100%',
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  scoreText: {
    color: 'green',
    fontSize: 21,
    fontWeight: 'bold',
  },
  right: {
    backgroundColor: 'rgba(0, 128, 0, 0.5)',  // Semi-transparent green background
  },
  textFeedBack: {
    textAlign: 'center',
    color: '#ffff',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtextFeedBack: {
    textAlign: 'center',
    color: '#ffff',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  wrong: {
    backgroundColor: 'rgba(128, 0, 0, 0.5)',  // Semi-transparent green background
  },
  modalContainerFeedback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentFeedback: {
    width: 'fit',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '95%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalButtonWrong: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  gameover: {
    color: "red",
  },
  green: {
    textAlign: 'center',
    color: "green",
  }
});
