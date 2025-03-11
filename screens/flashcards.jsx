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
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';

const sign_database = {
  aunt: {
    title: 'Aunt',
    path: require('../assets/images/categories/quiz/videos/aunt.mp4'),
    mediatype: 'video',
  },
  baby: {
    title: 'Baby',
    path: require('../assets/images/categories/quiz/videos/baby.mp4'),
    mediatype: 'video',
  },
  balance: {
    title: 'Balance',
    path: require('../assets/images/categories/quiz/videos/balance.mp4'),
    mediatype: 'video',
  },
  bird: {
    title: 'Bird',
    path: require('../assets/images/categories/quiz/videos/bird.mp4'),
    mediatype: 'video',
  },
  black: {
    title: 'Black',
    path: require('../assets/images/categories/quiz/videos/black.mp4'),
    mediatype: 'video',
  },
  blue: {
    title: 'Blue',
    path: require('../assets/images/categories/quiz/videos/blue.mp4'),
    mediatype: 'video',
  },
  brother: {
    title: 'Brother',
    path: require('../assets/images/categories/quiz/videos/brother.mp4'),
    mediatype: 'video',
  },
  brown: {
    title: 'Brown',
    path: require('../assets/images/categories/quiz/videos/brown.mp4'),
    mediatype: 'video',
  },
  butterfly: {
    title: 'Butterfly',
    path: require('../assets/images/categories/quiz/videos/butterfly.mp4'),
    mediatype: 'video',
  },
  cat: {
    title: 'Cat',
    path: require('../assets/images/categories/quiz/videos/cat.mp4'),
    mediatype: 'video',
  },
  chicken: {
    title: 'Chicken',
    path: require('../assets/images/categories/quiz/videos/chicken.mp4'),
    mediatype: 'video',
  },
  cleaning: {
    title: 'Cleaning',
    path: require('../assets/images/categories/quiz/videos/cleaning.mp4'),
    mediatype: 'video',
  },
  climbing: {
    title: 'Climbing',
    path: require('../assets/images/categories/quiz/videos/climbing.mp4'),
    mediatype: 'video',
  },
  cow: {
    title: 'Cow',
    path: require('../assets/images/categories/quiz/videos/cow.mp4'),
    mediatype: 'video',
  },
  crawl: {
    title: 'Crawl',
    path: require('../assets/images/categories/quiz/videos/crawl.mp4'),
    mediatype: 'video',
  },
  crocodile: {
    title: 'Crocodile',
    path: require('../assets/images/categories/quiz/videos/crocodile.mp4'),
    mediatype: 'video',
  },
  dancing: {
    title: 'Dancing',
    path: require('../assets/images/categories/quiz/videos/dancing.mp4'),
    mediatype: 'video',
  },
  dark: {
    title: 'Dark',
    path: require('../assets/images/categories/quiz/videos/dark.mp4'),
    mediatype: 'video',
  },
  do_you_want_to_play: {
    title: 'Do you want to play',
    path: require('../assets/images/categories/quiz/videos/do you want to play.mp4'),
    mediatype: 'video',
  },
  dog: {
    title: 'Dog',
    path: require('../assets/images/categories/quiz/videos/dog.mp4'),
    mediatype: 'video',
  },
  elephant: {
    title: 'Elephant',
    path: require('../assets/images/categories/quiz/videos/elephant.mp4'),
    mediatype: 'video',
  },
  father: {
    title: 'Father',
    path: require('../assets/images/categories/quiz/videos/father.mp4'),
    mediatype: 'video',
  },
  fish: {
    title: 'Fish',
    path: require('../assets/images/categories/quiz/videos/fish.mp4'),
    mediatype: 'video',
  },
  follow_the_leader: {
    title: 'Follow the leader',
    path: require('../assets/images/categories/quiz/videos/follow the leader.mp4'),
    mediatype: 'video',
  },
  freeze_dance: {
    title: 'Freeze dance',
    path: require('../assets/images/categories/quiz/videos/freeze dance.mp4'),
    mediatype: 'video',
  },
  friday: {
    title: 'Friday',
    path: require('../assets/images/categories/quiz/videos/friday.mp4'),
    mediatype: 'video',
  },
  frog: {
    title: 'Frog',
    path: require('../assets/images/categories/quiz/videos/frog.mp4'),
    mediatype: 'video',
  },
  giraffe: {
    title: 'Giraffe',
    path: require('../assets/images/categories/quiz/videos/giraffe.mp4'),
    mediatype: 'video',
  },
  gold: {
    title: 'Gold',
    path: require('../assets/images/categories/quiz/videos/gold.mp4'),
    mediatype: 'video',
  },
  goodmorning: {
    title: 'Good morning',
    path: require('../assets/images/categories/quiz/videos/goodmorning.mp4'),
    mediatype: 'video',
  },
  goodnight: {
    title: 'Good night',
    path: require('../assets/images/categories/quiz/videos/goodnight.mp4'),
    mediatype: 'video',
  },
  grandpa: {
    title: 'Grandpa',
    path: require('../assets/images/categories/quiz/videos/grandpa.mp4'),
    mediatype: 'video',
  },
  gray: {
    title: 'Gray',
    path: require('../assets/images/categories/quiz/videos/gray.mp4'),
    mediatype: 'video',
  },
  green: {
    title: 'Green',
    path: require('../assets/images/categories/quiz/videos/green.mp4'),
    mediatype: 'video',
  },
  grandma: {
    title: 'Grandma',
    path: require('../assets/images/categories/quiz/videos/grandma.mp4'),
    mediatype: 'video',
  },
  happy_birthday: {
    title: 'Happy birthday',
    path: require('../assets/images/categories/quiz/videos/happy birthday.mp4'),
    mediatype: 'video',
  },
  hello: {
    title: 'Hello',
    path: require('../assets/images/categories/quiz/videos/hello.mp4'),
    mediatype: 'video',
  },
  here_s_a_hug: {
    title: 'Here\'s a hug',
    path: require('../assets/images/categories/quiz/videos/here_s a hug.mp4'),
    mediatype: 'video',
  },
  holding: {
    title: 'Holding',
    path: require('../assets/images/categories/quiz/videos/holding.mp4'),
    mediatype: 'video',
  },
  horse: {
    title: 'Horse',
    path: require('../assets/images/categories/quiz/videos/horse.mp4'),
    mediatype: 'video',
  },
  how_are_you: {
    title: 'How are you',
    path: require('../assets/images/categories/quiz/videos/how are you.mp4'),
    mediatype: 'video',
  },
  hula_hooping: {
    title: 'Hula hooping',
    path: require('../assets/images/categories/quiz/videos/hula hooping.mp4'),
    mediatype: 'video',
  },
  i_love_you: {
    title: 'I love you',
    path: require('../assets/images/categories/quiz/videos/i love you.mp4'),
    mediatype: 'video',
  },
  i_m_happy: {
    title: 'I\'m happy',
    path: require('../assets/images/categories/quiz/videos/i_m happy.mp4'),
    mediatype: 'video',
  },
  i_m_sorry: {
    title: 'I\'m sorry',
    path: require('../assets/images/categories/quiz/videos/i_m sorry.mp4'),
    mediatype: 'video',
  },
  light: {
    title: 'Light',
    path: require('../assets/images/categories/quiz/videos/light.mp4'),
    mediatype: 'video',
  },
  may_i_go_to_the_bathroom: {
    title: 'May I go to the bathroom',
    path: require('../assets/images/categories/quiz/videos/may i go to the bathroom.mp4'),
    mediatype: 'video',
  },
  monday: {
    title: 'Monday',
    path: require('../assets/images/categories/quiz/videos/monday.mp4'),
    mediatype: 'video',
  },
  monkey: {
    title: 'Monkey',
    path: require('../assets/images/categories/quiz/videos/monkey.mp4'),
    mediatype: 'video',
  },
  mother: {
    title: 'Mother',
    path: require('../assets/images/categories/quiz/videos/mother.mp4'),
    mediatype: 'video',
  },
  orange: {
    title: 'Orange',
    path: require('../assets/images/categories/quiz/videos/orange.mp4'),
    mediatype: 'video',
  },
  pink: {
    title: 'Pink',
    path: require('../assets/images/categories/quiz/videos/pink.mp4'),
    mediatype: 'video',
  },
  playing: {
    title: 'Playing',
    path: require('../assets/images/categories/quiz/videos/playing.mp4'),
    mediatype: 'video',
  },
  purple: {
    title: 'Purple',
    path: require('../assets/images/categories/quiz/videos/purple.mp4'),
    mediatype: 'video',
  },
  rabbit: {
    title: 'Rabbit',
    path: require('../assets/images/categories/quiz/videos/rabbit.mp4'),
    mediatype: 'video',
  },
  red: {
    title: 'Red',
    path: require('../assets/images/categories/quiz/videos/red.mp4'),
    mediatype: 'video',
  },
  running: {
    title: 'Running',
    path: require('../assets/images/categories/quiz/videos/running.mp4'),
    mediatype: 'video',
  },
  saturday: {
    title: 'Saturday',
    path: require('../assets/images/categories/quiz/videos/saturday.mp4'),
    mediatype: 'video',
  },
  sister: {
    title: 'Sister',
    path: require('../assets/images/categories/quiz/videos/sister.mp4'),
    mediatype: 'video',
  },
  snake: {
    title: 'Snake',
    path: require('../assets/images/categories/quiz/videos/snake.mp4'),
    mediatype: 'video',
  },
  sunday: {
    title: 'Sunday',
    path: require('../assets/images/categories/quiz/videos/sunday.mp4'),
    mediatype: 'video',
  },
  swimming: {
    title: 'Swimming',
    path: require('../assets/images/categories/quiz/videos/swimming.mp4'),
    mediatype: 'video',
  },
  thank_you: {
    title: 'Thank you',
    path: require('../assets/images/categories/quiz/videos/thank you.mp4'),
    mediatype: 'video',
  },
  thursday: {
    title: 'Thursday',
    path: require('../assets/images/categories/quiz/videos/thursday.mp4'),
    mediatype: 'video',
  },
  tiger: {
    title: 'Tiger',
    path: require('../assets/images/categories/quiz/videos/tiger.mp4'),
    mediatype: 'video',
  },
  tuesday: {
    title: 'Tuesday',
    path: require('../assets/images/categories/quiz/videos/tuesday.mp4'),
    mediatype: 'video',
  },
  walking: {
    title: 'Walking',
    path: require('../assets/images/categories/quiz/videos/walking.mp4'),
    mediatype: 'video',
  },
  wednesday: {
    title: 'Wednesday',
    path: require('../assets/images/categories/quiz/videos/wednesday.mp4'),
    mediatype: 'video',
  },
  white: {
    title: 'White',
    path: require('../assets/images/categories/quiz/videos/white.mp4'),
    mediatype: 'video',
  },
  yellow: {
    title: 'Yellow',
    path: require('../assets/images/categories/quiz/videos/yellow.mp4'),
    mediatype: 'video',
  },
  zebra: {
    title: 'Zebra',
    path: require('../assets/images/categories/quiz/videos/zebra.mp4'),
    mediatype: 'video',
  },
  A: {
    title: 'A',
    path: require('../assets/images/categories/quiz/blank_alphabets/A.png'),
    mediatype: 'image',
  },
  B: {
    title: 'B',
    path: require('../assets/images/categories/quiz/blank_alphabets/B.png'),
    mediatype: 'image',
  },
  C: {
    title: 'C',
    path: require('../assets/images/categories/quiz/blank_alphabets/C.png'),
    mediatype: 'image',
  },
  D: {
    title: 'D',
    path: require('../assets/images/categories/quiz/blank_alphabets/D.png'),
    mediatype: 'image',
  },
  E: {
    title: 'E',
    path: require('../assets/images/categories/quiz/blank_alphabets/E.png'),
    mediatype: 'image',
  },
  F: {
    title: 'F',
    path: require('../assets/images/categories/quiz/blank_alphabets/F.png'),
    mediatype: 'image',
  },
  G: {
    title: 'G',
    path: require('../assets/images/categories/quiz/blank_alphabets/G.png'),
    mediatype: 'image',
  },
  H: {
    title: 'H',
    path: require('../assets/images/categories/quiz/blank_alphabets/H.png'),
    mediatype: 'image',
  },
  I: {
    title: 'I',
    path: require('../assets/images/categories/quiz/blank_alphabets/I.png'),
    mediatype: 'image',
  },
  J: {
    title: 'J',
    path: require('../assets/images/categories/quiz/blank_alphabets/J.png'),
    mediatype: 'image',
  },
  K: {
    title: 'K',
    path: require('../assets/images/categories/quiz/blank_alphabets/K.png'),
    mediatype: 'image',
  },
  L: {
    title: 'L',
    path: require('../assets/images/categories/quiz/blank_alphabets/L.png'),
    mediatype: 'image',
  },
  M: {
    title: 'M',
    path: require('../assets/images/categories/quiz/blank_alphabets/M.png'),
    mediatype: 'image',
  },
  N: {
    title: 'N',
    path: require('../assets/images/categories/quiz/blank_alphabets/N.png'),
    mediatype: 'image',
  },
  O: {
    title: 'O',
    path: require('../assets/images/categories/quiz/blank_alphabets/O.png'),
    mediatype: 'image',
  },
  P: {
    title: 'P',
    path: require('../assets/images/categories/quiz/blank_alphabets/P.png'),
    mediatype: 'image',
  },
  Q: {
    title: 'Q',
    path: require('../assets/images/categories/quiz/blank_alphabets/Q.png'),
    mediatype: 'image',
  },
  R: {
    title: 'R',
    path: require('../assets/images/categories/quiz/blank_alphabets/R.png'),
    mediatype: 'image',
  },
  S: {
    title: 'S',
    path: require('../assets/images/categories/quiz/blank_alphabets/S.png'),
    mediatype: 'image',
  },
  T: {
    title: 'T',
    path: require('../assets/images/categories/quiz/blank_alphabets/T.png'),
    mediatype: 'image',
  },
  U: {
    title: 'U',
    path: require('../assets/images/categories/quiz/blank_alphabets/U.png'),
    mediatype: 'image',
  },
  V: {
    title: 'V',
    path: require('../assets/images/categories/quiz/blank_alphabets/V.png'),
    mediatype: 'image',
  },
  W: {
    title: 'W',
    path: require('../assets/images/categories/quiz/blank_alphabets/W.png'),
    mediatype: 'image',
  },
  X: {
    title: 'X',
    path: require('../assets/images/categories/quiz/blank_alphabets/X.png'),
    mediatype: 'image',
  },
  Y: {
    title: 'Y',
    path: require('../assets/images/categories/quiz/blank_alphabets/Y.png'),
    mediatype: 'image',
  },
  Z: {
    title: 'Z',
    path: require('../assets/images/categories/quiz/blank_alphabets/Z.png'),
    mediatype: 'image',
  },
};

const generateFlashQuestion = () => {
  const items = Object.keys(sign_database).map(key => {
    const data = sign_database[key];
    return {
      title: data.title,
      path: data.path,
      mediaType: data.mediatype, // determine media type based on the file extension
      options: getOptions(data.title),
    }
  });
  return shuffleArray(items);
}


const getOptions = (sign) => {
  const options = [];
  const correctAnswer = sign;

  // First, push the correct answer
  options.push(correctAnswer);

  // Get a list of all signs' titles (exclude the correct answer's title)
  const allTitles = Object.keys(sign_database)
    .map(item => sign_database[item].title)
    .filter(title => title !== correctAnswer);

  // Shuffle the titles to randomize
  const shuffledTitles = shuffleArray(allTitles);

  // Pick up to 3 random incorrect answers
  for (let i = 0; i < 3; i++) {
    if (shuffledTitles[i]) {
      options.push(shuffledTitles[i]);
    }
  }
  // Shuffle options to randomize the order
  return shuffleArray(options);
};

// Function to shuffle the array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

export default function FlashCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const [flashCardQuizData, setFlashCardQuizData] = useState(generateFlashQuestion); // Initialize quiz data on load
  const currentQuiz = flashCardQuizData[currentIndex];

  const handleAnswer = (answer) => {
    if (answer === currentQuiz.title) {
      const newScore = score + 1;
      setScore(newScore);

      if (newScore === 10) {
        setIsGameWon(true);
      } else {
        setIsAnswerRight(true);
        // Alert.alert('Correct!', `You selected the right answer: ${ answer }`);
      }
    } else {
      const newHearts = hearts - 1;
      setHearts(newHearts);

      if (newHearts === 0) {
        setIsGameOver(true);
      } else {
        setIsAnswerWrong(true);
        // Alert.alert('Wrong!', `The correct answer was: ${ currentQuiz.correctAnswer }`);
      }
    }
  };
  const nextQuestion = () => {
    const nextIndex = (currentIndex + 1) % flashCardQuizData.length;
    setCurrentIndex(nextIndex);
  }

  const resetGame = () => {
    setFlashCardQuizData(generateFlashQuestion()); // Generate new quiz data for a new game
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
                }}
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
              <ThemedText style={styles.subtextFeedBack}>The correct answer is {currentQuiz.title}</ThemedText>
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
              {currentQuiz.mediaType === 'video' ? (
                < Video
                  source={currentQuiz.path}
                  style={styles.video}
                  resizeMode={ResizeMode.COVER}
                  shouldPlay={true}
                  isLooping={true}
                />
              ) : (
                <Image
                  source={currentQuiz.path}
                  style={styles.image}
                />
              )}
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
  video: {
    borderWidth: 1,
    borderRadius: 35,
    borderColor: '#d9d9d8',
    width: "100%", // Set width to fill the card
    height: 200, // Set a fixed height for the video, adjust as needed
  },
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
