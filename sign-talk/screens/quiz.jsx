import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

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
      image: require('../assets/images/categories/alphabets/A.png'),
      question: 'Does the sign for "A" involve a closed fist with the thumb resting on the side?',
      answer: 'Yes' // Correct
    },
    B: {
      image: require('../assets/images/categories/alphabets/B.png'),
      question: 'Is the sign for "B" made by holding the fingers together and extending them downward?',
      answer: 'No' // Incorrect
    },
    C: {
      image: require('../assets/images/categories/alphabets/C.png'),
      question: 'Does the sign for "C" resemble the shape of the letter itself, with a curved hand?',
      answer: 'Yes' // Correct
    },
    D: {
      image: require('../assets/images/categories/alphabets/D.png'),
      question: 'Is the sign for "D" made by forming a circle with your thumb while the other fingers are extended?',
      answer: 'No' // Incorrect
    },
    E: {
      image: require('../assets/images/categories/alphabets/E.png'),
      question: 'Does the sign for "E" involve curling the fingers into a relaxed position while the thumb is extended?',
      answer: 'Yes' // Correct
    },
    F: {
      image: require('../assets/images/categories/alphabets/F.png'),
      question: 'Is the sign for "F" formed by touching the thumb and pinky together?',
      answer: 'No' // Incorrect
    },
    G: {
      image: require('../assets/images/categories/alphabets/G.png'),
      question: 'Does the sign for "G" use the thumb and index finger to create a pinching motion?',
      answer: 'Yes' // Correct
    },
    H: {
      image: require('../assets/images/categories/alphabets/H.png'),
      question: 'Is the sign for "H" made by extending the index and ring fingers together?',
      answer: 'No' // Incorrect
    },
    I: {
      image: require('../assets/images/categories/alphabets/I.png'),
      question: 'Does the sign for "I" involve holding up the pinky finger while the other fingers are curled in?',
      answer: 'Yes' // Correct
    },
    J: {
      image: require('../assets/images/categories/alphabets/J.png'),
      question: 'Is the sign for "J" made by drawing a "J" shape in the air with the index finger?',
      answer: 'No' // Incorrect
    },
    K: {
      image: require('../assets/images/categories/alphabets/K.png'),
      question: 'Does the sign for "K" involve extending the index and middle fingers while the thumb is extended?',
      answer: 'Yes' // Correct
    },
    L: {
      image: require('../assets/images/categories/alphabets/L.png'),
      question: 'Is the sign for "L" made by extending the thumb and index finger while keeping the middle finger curled?',
      answer: 'No' // Incorrect
    },
    M: {
      image: require('../assets/images/categories/alphabets/M.png'),
      question: 'Does the sign for "M" involve placing the thumb under the three fingers?',
      answer: 'Yes' // Correct
    },
    N: {
      image: require('../assets/images/categories/alphabets/N.png'),
      question: 'Is the sign for "N" made by placing the thumb under two extended fingers?',
      answer: 'Yes' // Correct
    },
    O: {
      image: require('../assets/images/categories/alphabets/O.png'),
      question: 'Does the sign for "O" involve forming a circle with your fingers?',
      answer: 'Yes' // Correct
    },
    P: {
      image: require('../assets/images/categories/alphabets/P.png'),
      question: 'Is the sign for "P" created by forming a "K" shape and pointing upward?',
      answer: 'No' // Incorrect
    },
    Q: {
      image: require('../assets/images/categories/alphabets/Q.png'),
      question: 'Does the sign for "Q" involve extending the thumb and index finger while pointing upward?',
      answer: 'Yes' // Correct
    },
    R: {
      image: require('../assets/images/categories/alphabets/R.png'),
      question: 'Is the sign for "R" made by crossing the index and ring fingers?',
      answer: 'No' // Incorrect
    },
    S: {
      image: require('../assets/images/categories/alphabets/S.png'),
      question: 'Does the sign for "S" involve making a fist with the thumb resting on the side?',
      answer: 'Yes' // Correct
    },
    T: {
      image: require('../assets/images/categories/alphabets/T.png'),
      question: 'Is the sign for "T" formed by tucking the thumb under the middle finger?',
      answer: 'No' // Incorrect
    },
    U: {
      image: require('../assets/images/categories/alphabets/U.png'),
      question: 'Does the sign for "U" involve extending the index and middle fingers while keeping the others curled?',
      answer: 'Yes' // Correct
    },
    V: {
      image: require('../assets/images/categories/alphabets/V.png'),
      question: 'Is the sign for "V" made by extending the index and ring fingers in a V shape?',
      answer: 'No' // Incorrect
    },
    W: {
      image: require('../assets/images/categories/alphabets/W.png'),
      question: 'Does the sign for "W" involve extending the index, middle, and ring fingers while keeping the pinky curled?',
      answer: 'Yes' // Correct
    },
    X: {
      image: require('../assets/images/categories/alphabets/X.png'),
      question: 'Is the sign for "X" made by curling the thumb while the other fingers are extended?',
      answer: 'No' // Incorrect
    },
    Y: {
      image: require('../assets/images/categories/alphabets/Y.png'),
      question: 'Does the sign for "Y" involve extending the thumb and pinky finger while the others are curled?',
      answer: 'Yes' // Correct
    },
    Z: {
      image: require('../assets/images/categories/alphabets/Z.png'),
      question: 'Is the sign for "Z" created by drawing a "Z" shape in the air with the middle finger?',
      answer: 'No' // Incorrect
    },
  },
  numbers: {
    1: {
      image: require('../assets/images/categories/numbers/1.png'),
      question: 'Does the sign for "1" involve extending the index finger only?',
      answer: 'Yes' // Correct
    },
    2: {
      image: require('../assets/images/categories/numbers/2.png'),
      question: 'Is the sign for "2" made by extending the index and middle fingers together?',
      answer: 'Yes' // Correct
    },
    3: {
      image: require('../assets/images/categories/numbers/3.png'),
      question: 'Does the sign for "3" involve extending the index, middle, and ring fingers while the pinky and thumb are tucked in?',
      answer: 'Yes' // Correct
    },
    4: {
      image: require('../assets/images/categories/numbers/4.png'),
      question: 'Is the sign for "4" made by extending all four fingers while the thumb is tucked in?',
      answer: 'No' // Incorrect
    },
    5: {
      image: require('../assets/images/categories/numbers/5.png'),
      question: 'Does the sign for "5" involve extending all fingers with the thumb out?',
      answer: 'Yes' // Correct
    },
    6: {
      image: require('../assets/images/categories/numbers/6.png'),
      question: 'Is the sign for "6" made by curling the pinky while extending the thumb and index finger?',
      answer: 'No' // Incorrect
    },
    7: {
      image: require('../assets/images/categories/numbers/7.png'),
      question: 'Does the sign for "7" involve extending the thumb and all fingers except the pinky?',
      answer: 'No' // Incorrect
    },
    8: {
      image: require('../assets/images/categories/numbers/8.png'),
      question: 'Is the sign for "8" made by extending all fingers while keeping the thumb tucked?',
      answer: 'Yes' // Correct
    },
    9: {
      image: require('../assets/images/categories/numbers/9.png'),
      question: 'Does the sign for "9" involve extending the thumb while curling the other fingers?',
      answer: 'Yes' // Correct
    },
    10: {
      image: require('../assets/images/categories/numbers/10.png'),
      question: 'Is the sign for "10" formed by making a fist with the thumb extended?',
      answer: 'No' // Incorrect
    },
  },
  days: {
    Monday: {
      video: require('../assets/images/categories/day/Monday.mp4'),
      question: 'Is the sign for "Monday" made by holding up your dominant hand in an "M" shape?',
      answer: 'Yes'
    },
    Tuesday: {
      video: require('../assets/images/categories/day/Tuesday.mp4'),
      question: 'Does the sign for "Tuesday" involve making a "T" shape with your hand?',
      answer: 'Yes'
    },
    Wednesday: {
      video: require('../assets/images/categories/day/Wednesday.mp4'),
      question: 'Is the sign for "Wednesday" formed by creating a "W" shape with your fingers?',
      answer: 'Yes'
    },
    Thursday: {
      video: require('../assets/images/categories/day/Thursday.mp4'),
      question: 'Does the sign for "Thursday" involve making a "T" shape and moving it in a circular motion?',
      answer: 'Yes'
    },
    Friday: {
      video: require('../assets/images/categories/day/Friday.mp4'),
      question: 'Is the sign for "Friday" made by forming an "F" shape with your fingers?',
      answer: 'Yes'
    },
    Saturday: {
      video: require('../assets/images/categories/day/Saturday.mp4'),
      question: 'Does the sign for "Saturday" involve making a fist and moving it in a circular motion?',
      answer: 'Yes'
    },
    Sunday: {
      video: require('../assets/images/categories/day/Sunday.mp4'),
      question: 'Is the sign for "Sunday" performed by placing your dominant hand above the non-dominant hand in a "C" shape?',
      answer: 'Yes'
    },
  },
  animals: {
    Bird: {
      video: require('../assets/images/categories/animals/Bird.mp4'),
      question: 'Does the sign for "Bird" involve pinching your thumb and index finger together near your mouth?',
      answer: 'Yes' // Correct
    },
    Cat: {
      video: require('../assets/images/categories/animals/Cat.mp4'),
      question: 'Is the sign for "Cat" made by mimicking whiskers with your thumb and index finger?',
      answer: 'No' // Incorrect
    },
    Dog: {
      video: require('../assets/images/categories/animals/Dog.mp4'),
      question: 'Does the sign for "Dog" involve patting your leg and snapping your fingers?',
      answer: 'Yes' // Correct
    },
    Tiger: {
      video: require('../assets/images/categories/animals/Tiger.mp4'),
      question: 'Is the sign for "Tiger" made by extending your fingers and pulling them away from your face?',
      answer: 'No' // Incorrect
    },
  },
  physicalActivities: {
    Dancing: {
      video: require('../assets/images/categories/physical_activities/Dancing.mp4'),
      question: 'Does the sign for "Dancing" involve swaying your hands side to side in a rhythmic motion?',
      answer: 'Yes' // Correct
    },
    Jumping: {
      video: require('../assets/images/categories/physical_activities/Jumping.mp4'),
      question: 'Is the sign for "Jumping" made by holding both hands flat and moving them upwards?',
      answer: 'No' // Incorrect
    },
    Playing: {
      video: require('../assets/images/categories/physical_activities/Playing.mp4'),
      question: 'Does the sign for "Playing" involve forming a "Y" shape with your hands and moving them in circles?',
      answer: 'Yes' // Correct
    },
    Running: {
      video: require('../assets/images/categories/physical_activities/Running.mp4'),
      question: 'Is the sign for "Running" made by moving your hand in a forward motion while forming an "L" shape?',
      answer: 'No' // Incorrect
    },
    Walking: {
      video: require('../assets/images/categories/physical_activities/Walking.mp4'),
      question: 'Does the sign for "Walking" involve moving your hands alternately as if taking steps?',
      answer: 'Yes' // Correct
    },
  },
  greetings: {
    Goodmorning: {
      video: require('../assets/images/categories/greetings_and_phrases/Goodmorning.mp4'),
      question: 'Is the sign for "Good Morning" performed by raising your flat dominant hand from your chest?',
      answer: 'Yes' // Correct
    },
    Goodnight: {
      video: require('../assets/images/categories/greetings_and_phrases/Goodnight.mp4'),
      question: 'Does the sign for "Good Night" involve forming a "C" shape with both hands?',
      answer: 'No' // Incorrect
    },
    'Happy birthday': {
      video: require('../assets/images/categories/greetings_and_phrases/Happy birthday.mp4'),
      question: 'Is the sign for "Happy Birthday" made by patting your chest and then moving your hand towards your mouth?',
      answer: 'Yes' // Correct
    },
    'I_m sorry': {
      video: require('../assets/images/categories/greetings_and_phrases/I_m sorry.mp4'),
      question: 'Does the sign for "I\'m Sorry" involve making a fist and rubbing it over your chest in a circular motion?',
      answer: 'Yes' // Correct
    },
    'Nice to meet you': {
      video: require('../assets/images/categories/greetings_and_phrases/Nice to meet you.mp4'),
      question: 'Is the sign for "Nice to Meet You" performed by sliding one hand forward and bringing both index fingers together?',
      answer: 'No' // Incorrect
    },
    Please: {
      video: require('../assets/images/categories/greetings_and_phrases/Please.mp4'),
      question: 'Does the sign for "Please" involve placing your dominant hand on your chest and moving it in a circular motion?',
      answer: 'Yes' // Correct
    },
    'Thank you': {
      video: require('../assets/images/categories/greetings_and_phrases/Thank you.mp4'),
      question: 'Is the sign for "Thank You" made by moving your hand away from your mouth as if blowing a kiss?',
      answer: 'Yes'
    },
  },
};

export default function Quiz() {
  const navigation = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState({ message: '', color: 'blue' }); // State for feedback
  const questions = getQuizData();

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questions[currentQuestionIndex].answer;
    setFeedback({
      message: isCorrect ? 'Correct!' : 'Wrong!',
      color: isCorrect ? 'blue' : 'red', // Set color based on correctness
    });

    if (isCorrect) {
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore === 10) {
          alert('Congratulations! You reached the maximum score of 10!');
          resetQuiz();
        }
        return newScore;
      });
    }

    // Move to the next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setFeedback({ message: '', color: 'blue' }); // Clear feedback message for the next question
      } else {
        alert(`Quiz completed! Your score: ${score + (isCorrect ? 1 : 0)}/${questions.length}`);
        resetQuiz();
      }
    }, 1000); // Adjust delay as needed
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setFeedback({ message: '', color: 'blue' }); // Clear feedback message
  };

  return (
    <ThemedView style={styles.FullScreenContainer}>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.questionTitle}>Question:</ThemedText>

        {/* Conditional rendering for the question text */}
        {!feedback.message && (
          <ThemedText style={styles.questionText}>
            {questions[currentQuestionIndex].question}
          </ThemedText>
        )}

        {/* Feedback message with dynamic color */}
        {feedback.message && (
          <ThemedText style={[styles.feedbackMessage, { color: feedback.color }]}>
            {feedback.message}
          </ThemedText>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.answerButton} onPress={() => handleAnswer('Yes')}>
            <ThemedText style={[styles.answerText, styles.true]}>True</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answerButton} onPress={() => handleAnswer('No')}>
            <ThemedText style={[styles.answerText, styles.false]}>False</ThemedText>
          </TouchableOpacity>
        </View>

        <ThemedText style={styles.scoreText}>Score: {score}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  FullScreenContainer: {
    flex: 2,
    backgroundColor: '#FFDD68',
    alignItems: 'center',
  },
  container: {
    marginTop: 20,
    width: '94%',
    minHeight: 200,
    backgroundColor: '#fff',
    borderRadius: 11,
    shadowColor: '#001',
    shadowOpacity: 1.2,
    shadowRadius: 6,
    shadowOffset: { width: 1, height: 2 },
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 11,
    paddingRight: 11,
    paddingTop: 20,
    paddingBottom: 20,
  },
  questionTitle: {
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 41,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 60,
    marginTop: 5,
    paddingTop: 16,
    lineHeight: 50, // Adjust line height as needed
  },
  true: {
    padding: 10,
    backgroundColor: '#28dd68',
    color: '#334',
  },
  false: {
    padding: 10,
    backgroundColor: '#ff0068',
    color: '#334',
  },
  questionText: {
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 21,
    textAlign: 'center',
  },
  feedbackMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue', // Change color as needed
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '101%',
    marginTop: 21,
  },
  answerButton: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 11,
    marginHorizontal: 11,
    alignItems: 'center',
  },
  answerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#334',
    borderRadius: 11,
  },
  true: {
    padding: 10,
    backgroundColor: '#28dd68',
    color: '#334',
  },
  false: {
    padding: 10,
    backgroundColor: '#ff0068',
    color: '#334',
  },
  scoreText: {
    color: 'green',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 21,
  },
});
