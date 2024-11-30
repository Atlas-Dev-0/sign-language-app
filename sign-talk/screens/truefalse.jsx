
import React, { useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';


const WINNING_SCORE = 10; // Define the winning Score


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getQuizData = () => {
  const allQuestions = [];
  for (const category in quizData) {
    for (const key in quizData[category]) {
      allQuestions.push({
        question: quizData[category][key].question,
        answer: quizData[category][key].answer,
      });
    }
  }
  return shuffleArray(allQuestions); // Shuffle the questions
};

const quizData = {
  alphabets: {
    A: {

      question: 'Does the sign for "A" involve a closed fist with the thumb extended outward, pointing sideways?',
      answer: 'No' // The thumb is resting on the side, not pointing out.
    },
    B: {
      question: 'Is the sign for "B" made by holding all fingers together, extended upwards, while the thumb rests across the palm?',
      answer: 'Yes'
    },
    C: {

      question: 'Does the sign for "C" resemble a straight hand with all fingers close together?',
      answer: 'No' // The sign resembles the shape of the letter "C."
    },
    D: {

      question: 'Is the sign for "D" made by holding up the index finger while the thumb touches the tips of the other fingers?',
      answer: 'Yes'
    },
    E: {

      question: 'Does the sign for "E" involve making a fist with the thumb resting on the top of the fingers?',
      answer: 'No' // The thumb is tucked into the palm.
    },
    F: {

      question: 'Is the sign for "F" formed by making an "O" shape with the thumb and pinky finger?',
      answer: 'No' // It's the thumb and index finger forming the "O" shape.
    },
    G: {

      question: 'Does the sign for "G" involve extending the thumb and index finger parallel to each other?',
      answer: 'Yes'
    },
    H: {

      question: 'Is the sign for "H" made by extending the index and middle fingers while keeping the thumb folded?',
      answer: 'Yes'
    },
    I: {

      question: 'Does the sign for "I" involve pointing the index finger upwards while the rest of the hand is closed?',
      answer: 'No' // The pinky finger is extended, not the index finger.
    },
    J: {

      question: 'Is the sign for "J" made by drawing a "J" shape with the index finger?',
      answer: 'No' // The "J" is drawn using the pinky finger.
    },
    K: {

      question: 'Does the sign for "K" involve extending the index and middle fingers while the thumb is between them?',
      answer: 'Yes'
    },
    L: {

      question: 'Is the sign for "L" made by extending the thumb and index finger to form an "L" shape?',
      answer: 'Yes'
    },
    M: {

      question: 'Does the sign for "M" involve placing the thumb under only two extended fingers?',
      answer: 'No' // The thumb is placed under three fingers.
    },

    N: {

      question: 'Is the sign for "N" made by placing the thumb under three fingers?',
      answer: 'No' // The thumb is under two fingers.
    },
    O: {

      question: 'Does the sign for "O" involve curling all fingers to form a circular shape?',
      answer: 'Yes'
    },
    P: {

      question: 'Is the sign for "P" created by forming a "K" shape but with the palm facing downward?',
      answer: 'Yes'
    },
    Q: {

      question: 'Does the sign for "Q" involve extending the index and middle fingers in a "V" shape?',
      answer: 'No' // The thumb and index finger are extended downwards.
    },
    R: {

      question: 'Is the sign for "R" made by crossing the index and middle fingers?',
      answer: 'Yes'
    },
    S: {

      question: 'Does the sign for "S" involve making a fist with the thumb wrapped around the outside of the fingers?',
      answer: 'Yes'
    },
    T: {

      question: 'Is the sign for "T" made by tucking the thumb under two fingers?',
      answer: 'No' // The thumb is tucked under one finger (index).
    },
    U: {

      question: 'Does the sign for "U" involve extending the thumb and index finger in a "V" shape?',
      answer: 'No' // The index and middle fingers are extended.
    },
    V: {

      question: 'Is the sign for "V" made by extending the index and middle fingers in a "V" shape?',
      answer: 'Yes'
    },
    W: {

      question: 'Does the sign for "W" involve extending the thumb, index, and middle fingers?',
      answer: 'No' // The index, middle, and ring fingers are extended.
    },
    X: {
      question: 'Is the sign for "X" made by bending the index finger into a hook shape?',
      answer: 'Yes'
    },
    Y: {
      question: 'Does the sign for "Y" involve extending the thumb and pinky finger while keeping the other fingers curled?',
      answer: 'Yes'
    },
    Z: {
      question: 'Is the sign for "Z" made by drawing a "Z" shape in the air with the thumb?',
      answer: 'No' // The "Z" is drawn with the index finger.
    },
  },
  numbers: {
    1: {
      question: 'Does the sign for "1" involve extending the index finger only?',
      answer: 'Yes' // Correct
    },
    2: {
      question: 'Is the sign for "2" made by extending the index and middle fingers together?',
      answer: 'Yes' // Correct
    },
    3: {
      question: 'Does the sign for "3" involve extending the index, middle, and ring fingers while the pinky and thumb are tucked in?',
      answer: 'No' // Incorrect, the thumb is extended.
    },
    4: {
      question: 'Is the sign for "4" made by extending all four fingers while the thumb is tucked in?',
      answer: 'Yes' // Correct
    },
    5: {
      question: 'Does the sign for "5" involve extending all fingers with the thumb out?',
      answer: 'Yes' // Correct
    },
    6: {
      question: 'Is the sign for "6" made by curling the pinky while extending the thumb and index finger?',
      answer: 'No' // Incorrect, the pinky and thumb are extended.
    },
    7: {
      question: 'Does the sign for "7" involve extending the thumb and all fingers except the pinky?',
      answer: 'Yes' // Correct
    },
    8: {
      question: 'Is the sign for "8" made by touching the thumb and middle finger together while other fingers are extended?',
      answer: 'Yes' // Correct
    },
    9: {
      question: 'Does the sign for "9" involve touching the thumb and index finger together while other fingers are extended?',
      answer: 'Yes' // Correct
    },
    10: {
      question: 'Is the sign for "10" formed by shaking a closed fist with the thumb extended?',
      answer: 'Yes' // Correct
    }
  },
  days: {
    Monday: {

      question: 'Is the sign for "Monday" made by holding up your dominant hand in an "M" shape?',
      answer: 'Yes' // Correct
    },
    Tuesday: {

      question: 'Does the sign for "Tuesday" involve making a "T" shape with your hand?',
      answer: 'Yes' // Correct
    },
    Wednesday: {

      question: 'Is the sign for "Wednesday" formed by creating a "W" shape with your fingers?',
      answer: 'Yes' // Correct
    },
    Thursday: {

      question: 'Does the sign for "Thursday" involve making an "H" shape with your hand?',
      answer: 'No' // Incorrect, it uses a "T" and "H"
    },
    Friday: {

      question: 'Is the sign for "Friday" made by forming an "F" shape with your fingers?',
      answer: 'Yes' // Correct
    },
    Saturday: {

      question: 'Does the sign for "Saturday" involve making a fist and moving it in a circular motion?',
      answer: 'Yes' // Correct
    },
    Sunday: {

      question: 'Is the sign for "Sunday" performed by placing your dominant hand above the non-dominant hand in a "C" shape?',
      answer: 'No' // Incorrect, it involves open palms moving downward
    },
  },
  animals: {
    Bird: {

      question: 'Does the sign for "Bird" involve pinching your thumb and index finger together near your mouth?',
      answer: 'Yes' // Correct
    },
    Cat: {

      question: 'Is the sign for "Cat" made by mimicking whiskers with your thumb and index finger?',
      answer: 'Yes' // Correct, this was updated
    },
    Dog: {

      question: 'Does the sign for "Dog" involve patting your leg and snapping your fingers?',
      answer: 'Yes' // Correct
    },
    Tiger: {

      question: 'Is the sign for "Tiger" made by extending your fingers and pulling them away from your face?',
      answer: 'Yes' // Correct, updated for accuracy
    },
  },
  physicalActivities: {
    Dancing: {
      question: 'Does the sign for "Dancing" involve swaying your hands side to side in a rhythmic motion?',
      answer: 'Yes' // Correct
    },
    Jumping: {
      question: 'Is the sign for "Jumping" made by holding both hands flat and moving them upwards?',
      answer: 'No' // Incorrect
    },
    Playing: {
      question: 'Does the sign for "Playing" involve forming a "Y" shape with your hands and moving them in circles?',
      answer: 'Yes' // Correct
    },
    Running: {
      question: 'Is the sign for "Running" made by moving your hand in a forward motion while forming an "L" shape?',
      answer: 'No' // Incorrect
    },
    Walking: {
      question: 'Does the sign for "Walking" involve moving your hands alternately as if taking steps?',
      answer: 'Yes' // Correct
    },
  },
  greetings: {
    Goodmorning: {
      question: 'Is the sign for "Good Morning" performed by raising your flat dominant hand from your chest?',
      answer: 'Yes' // Correct
    },
    Goodnight: {

      question: 'Does the sign for "Good Night" involve forming a "C" shape with both hands?',
      answer: 'No' // Incorrect
    },
    'Happy birthday': {

      question: 'Is the sign for "Happy Birthday" made by patting your chest and then moving your hand towards your mouth?',
      answer: 'Yes' // Correct
    },
    'I_m sorry': {

      question: 'Does the sign for "I\'m Sorry" involve making a fist and rubbing it over your chest in a circular motion?',
      answer: 'Yes' // Correct
    },
    'Nice to meet you': {
      question: 'Is the sign for "Nice to Meet You" performed by sliding one hand forward and bringing both index fingers together?',
      answer: 'No' // Incorrect
    },
    Please: {
      question: 'Does the sign for "Please" involve placing your dominant hand on your chest and moving it in a circular motion?',
      answer: 'Yes' // Correct
    },
    'Thank you': {
      question: 'Is the sign for "Thank You" made by moving your hand away from your mouth as if blowing a kiss?',
      answer: 'Yes' // Correct
    },
  },
};


export default function TrueFalse() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [feedback, setFeedback] = useState({ message: '', color: 'green' });
  const [isGameModalVisible, setIsGameModalVisible] = useState(true);
  const [isOutcomeModalVisible, setIsOutcomeModalVisible] = useState(false);
  const [isWinningModalVisible, setIsWinningModalVisible] = useState(false); // New winning modal state
  const [outcomeColor, setOutcomeColor] = useState('');
  const [outcomeMessage, setOutcomeMessage] = useState(''); // Fix here: Declare outcomeMessage state
  const questions = getQuizData();

  const handleGameEnd = (isWin) => {
    setOutcomeMessage(
      isWin
        ? `Congratulations! You completed the quiz with a score of ${score}/${questions.length}.`
        : 'You lost! All hearts are gone. Better luck next time!'
    );
    setOutcomeColor(isWin ? 'green' : 'red'); // Set color for win or loss
    setIsOutcomeModalVisible(true); // Show modal
  };

  const handleStartGame = () => {
    setIsGameModalVisible(false);
  };

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questions[currentQuestionIndex].answer;

    setFeedback({
      message: isCorrect ? 'Correct!' : 'Wrong!',
      color: isCorrect ? 'green' : 'red',
    });

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setHearts((prevHearts) => {
        const newHearts = prevHearts - 1;
        if (newHearts === 0) {
          handleGameEnd(false);
        }
        return newHearts;
      });
    }

    setTimeout(() => {
      if (score + 1 === WINNING_SCORE) {
        // Trigger winning modal
        setIsWinningModalVisible(true);
        return;
      }

      if (currentQuestionIndex < questions.length - 1 && hearts > 0) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setFeedback({ message: '', color: 'green' });
      } else if (hearts > 0) {
        handleGameEnd(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setHearts(3);
    setFeedback({ message: '', color: 'green' });
    setIsOutcomeModalVisible(false);
    setIsWinningModalVisible(false);
    setIsGameModalVisible(true);
  };

  return (
    <View style={styles.bgcontainer}>
      {/* Start Game Modal */}
      <Modal visible={isGameModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ThemedText style={styles.modalTitle}>Ready to Play?</ThemedText>
            <ThemedText style={styles.modalText}>
              Test your knowledge and have fun!
            </ThemedText>
            <TouchableOpacity style={styles.modalButton} onPress={handleStartGame}>
              <Text style={styles.modalButtonText}>Start Game</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Winning Modal */}
      <Modal visible={isWinningModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContainer, { borderColor: 'gold' }]} >
            <ThemedText style={[styles.modalTitle, { color: 'gold' }]}>
              You Win!
            </ThemedText>
            <ThemedText style={styles.modalText}>
              Congratulations! You reached the winning score of {WINNING_SCORE}!
            </ThemedText>
            <TouchableOpacity style={styles.modalButton} onPress={resetQuiz}>
              <Text style={styles.modalButtonText}>Play Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Outcome Modal */}
      <Modal visible={isOutcomeModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContainer, { borderColor: outcomeColor }]}>
            <ThemedText style={[styles.modalTitle, { color: outcomeColor }]}>
              {outcomeColor === 'green' ? 'You Win!' : 'Game Over'}
            </ThemedText>
            <ThemedText style={styles.modalText}>{outcomeMessage}</ThemedText>
            <TouchableOpacity style={styles.modalButton} onPress={resetQuiz}>
              <Text style={styles.modalButtonText}>Restart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <LinearGradient
        style={styles.bgcontainer}
        colors={['#ff0070', '#6fb7ff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <ThemedText style={styles.scoreText}>Score: {score}</ThemedText>
            <ThemedText style={styles.scoreText}>
              Hearts: {'♥'.repeat(hearts)}
            </ThemedText>
          </View>
        </View>
        <View style={styles.container}>
          {feedback.message && (
            <View style={styles.feedbackContainer}>
              <ThemedText style={[styles.feedbackMessage, { color: feedback.color }]}>
                {feedback.message}
              </ThemedText>
            </View>
          )}
          {!feedback.message && (
            <ThemedText style={styles.questionText}>
              {questions[currentQuestionIndex].question}
            </ThemedText>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.answerButton, styles.trueBox]}
            onPress={() => handleAnswer('Yes')}
          >
            <ThemedText style={[styles.answerText, styles.true]}>True</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.answerButton, styles.falseBox]}
            onPress={() => handleAnswer('No')}
          >
            <ThemedText style={[styles.answerText, styles.false]}>False</ThemedText>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  bgcontainer: {
    height: "100%",
    width: "100%",
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 2,
    marginBottom: 10,
    paddingHorizontal: 30,
    justifyContent: "space-between",
  },
  container: {
    marginTop: 10,
    width: '94%',
    height: '30%',
    backgroundColor: '#fff',
    borderRadius: 11,
    shadowColor: '#001',
    shadowOpacity: 1.2,
    shadowRadius: 6,
    shadowOffset: { width: 1, height: 2 },
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
  },
  questionTitle: {
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 41,
    fontWeight: 'bold',
    color: 'green',
    lineHeight: 50, // Adjust line height as needed
  },
  questionText: {
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 21,
    marginTop: 30,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  feedbackContainer: {
    backgroundColor: "transparent",
    height: '70%',
    width: '80%',
    color: 'green',
    textAlign: 'center',
    justifyContent: 'center',
  },
  feedbackMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    padding: 10,
    flexDirection: 'column',
    width: '100%',
    height: '40%',
    marginTop: 10,
    overflow: 'hidden',
  },
  answerButton: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  answerText: {

    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff', // Adjust text color for better contrast
  },
  true: {
    padding: 10,
  },
  false: {
    padding: 10,
  },
  trueBox: {
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20,
    width: '100%',
    height: '40%',
    backgroundColor: '#28dd68', // Green background for True
  },
  falseBox: {
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20,
    marginVertical: 10,
    width: '100%',
    height: '40%',
    backgroundColor: '#ff0068', // Red background for False
  },
  // -------------------
  headerContainer: {
    marginTop: 50,
    backgroundColor: '#fff',
    borderRadius: 11,
    shadowColor: '#001',
    shadowOpacity: 1.2,
    shadowRadius: 6,
    shadowOffset: { width: 1, height: 2 },
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 'fit',
    width: "95%",
    alignItems: 'center',
  },
  scoreText: {
    color: 'green',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ff0070',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  modalButton: {
    backgroundColor: '#6fb7ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
