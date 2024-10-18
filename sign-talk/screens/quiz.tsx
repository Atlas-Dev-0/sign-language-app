import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the type for the navigation stack
type RootStackParamList = {
  'Sign Video': { video: any; title: string; description: string }; // Use 'any' for video type
};

// Define the navigation prop
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Sign Video'>;

// Define the type for the quiz data
interface QuizData {
  question: string;
  answer: string;
  video?: any; // Video is optional, as not all questions will have videos
}

// Mock function to get quiz data based on a category
const getQuizData = (category: keyof typeof quizData): QuizData[] => {
  return Object.keys(quizData[category]).map((key) => ({
    question: quizData[category][key].question,
    answer: quizData[category][key].answer,
    video: quizData[category][key].video,
  }));
};

const quizData = {
  images: {
    A: {
      image: require('../assets/images/categories/alphabets/A.png'),
      question: 'Does the sign for "A" involve a closed fist with the thumb resting on the side?',
      answer: 'Yes'
    },
    B: {
      image: require('../assets/images/categories/alphabets/B.png'),
      question: 'Is the sign for "B" made by holding the fingers together and extending them upward?',
      answer: 'Yes'
    },
    C: {
      image: require('../assets/images/categories/alphabets/C.png'),
      question: 'Does the sign for "C" resemble the shape of the letter itself, with a curved hand?',
      answer: 'Yes'
    },
    D: {
      image: require('../assets/images/categories/alphabets/D.png'),
      question: 'Is the sign for "D" made by forming a circle with your index finger while the other fingers are tucked in?',
      answer: 'Yes'
    },
    E: {
      image: require('../assets/images/categories/alphabets/E.png'),
      question: 'Does the sign for "E" involve curling the fingers into a relaxed position while the thumb is extended?',
      answer: 'Yes'
    },
    F: {
      image: require('../assets/images/categories/alphabets/F.png'),
      question: 'Is the sign for "F" formed by touching the thumb and index finger together?',
      answer: 'Yes'
    },
    G: {
      image: require('../assets/images/categories/alphabets/G.png'),
      question: 'Does the sign for "G" use the thumb and index finger to create a pinching motion?',
      answer: 'Yes'
    },
    H: {
      image: require('../assets/images/categories/alphabets/H.png'),
      question: 'Is the sign for "H" made by extending the index and middle fingers together?',
      answer: 'Yes'
    },
    I: {
      image: require('../assets/images/categories/alphabets/I.png'),
      question: 'Does the sign for "I" involve holding up the pinky finger while the other fingers are curled in?',
      answer: 'Yes'
    },
    J: {
      image: require('../assets/images/categories/alphabets/J.png'),
      question: 'Is the sign for "J" made by drawing a "J" shape in the air with the pinky finger?',
      answer: 'Yes'
    },
    K: {
      image: require('../assets/images/categories/alphabets/K.png'),
      question: 'Does the sign for "K" involve extending the index and middle fingers while the thumb is extended?',
      answer: 'Yes'
    },
    L: {
      image: require('../assets/images/categories/alphabets/L.png'),
      question: 'Is the sign for "L" made by extending the thumb and index finger while the others are curled?',
      answer: 'Yes'
    },
    M: {
      image: require('../assets/images/categories/alphabets/M.png'),
      question: 'Does the sign for "M" involve placing the thumb under the three fingers?',
      answer: 'Yes'
    },
    N: {
      image: require('../assets/images/categories/alphabets/N.png'),
      question: 'Is the sign for "N" made by placing the thumb under two extended fingers?',
      answer: 'Yes'
    },
    O: {
      image: require('../assets/images/categories/alphabets/O.png'),
      question: 'Does the sign for "O" involve forming a circle with your fingers?',
      answer: 'Yes'
    },
    P: {
      image: require('../assets/images/categories/alphabets/P.png'),
      question: 'Is the sign for "P" created by forming a "K" shape and pointing downward?',
      answer: 'Yes'
    },
    Q: {
      image: require('../assets/images/categories/alphabets/Q.png'),
      question: 'Does the sign for "Q" involve extending the thumb and index finger while pointing downward?',
      answer: 'Yes'
    },
    R: {
      image: require('../assets/images/categories/alphabets/R.png'),
      question: 'Is the sign for "R" made by crossing the index and middle fingers?',
      answer: 'Yes'
    },
    S: {
      image: require('../assets/images/categories/alphabets/S.png'),
      question: 'Does the sign for "S" involve making a fist with the thumb resting on top?',
      answer: 'Yes'
    },
    T: {
      image: require('../assets/images/categories/alphabets/T.png'),
      question: 'Is the sign for "T" formed by tucking the thumb under the index finger?',
      answer: 'Yes'
    },
    U: {
      image: require('../assets/images/categories/alphabets/U.png'),
      question: 'Does the sign for "U" involve extending the index and middle fingers while keeping the others curled?',
      answer: 'Yes'
    },
    V: {
      image: require('../assets/images/categories/alphabets/V.png'),
      question: 'Is the sign for "V" made by extending the index and middle fingers in a V shape?',
      answer: 'Yes'
    },
    W: {
      image: require('../assets/images/categories/alphabets/W.png'),
      question: 'Does the sign for "W" involve extending the index, middle, and ring fingers while the others are curled?',
      answer: 'Yes'
    },
    X: {
      image: require('../assets/images/categories/alphabets/X.png'),
      question: 'Is the sign for "X" made by curling the index finger while the other fingers are tucked in?',
      answer: 'Yes'
    },
    Y: {
      image: require('../assets/images/categories/alphabets/Y.png'),
      question: 'Does the sign for "Y" involve extending the thumb and pinky finger while the other fingers are curled?',
      answer: 'Yes'
    },
    Z: {
      image: require('../assets/images/categories/alphabets/Z.png'),
      question: 'Is the sign for "Z" created by drawing a "Z" shape in the air with the index finger?',
      answer: 'Yes'
    },
  },
  numbers: {
    1: {
      image: require('../assets/images/categories/numbers/1.png'),
      question: 'Is the sign for "1" made by extending the index finger only?',
      answer: 'Yes'
    },
    2: {
      image: require('../assets/images/categories/numbers/2.png'),
      question: 'Does the sign for "2" involve extending the index and middle fingers?',
      answer: 'Yes'
    },
    3: {
      image: require('../assets/images/categories/numbers/3.png'),
      question: 'Is the sign for "3" made by extending the index, middle, and ring fingers?',
      answer: 'Yes'
    },
    4: {
      image: require('../assets/images/categories/numbers/4.png'),
      question: 'Does the sign for "4" involve extending all fingers except the thumb?',
      answer: 'Yes'
    },
    5: {
      image: require('../assets/images/categories/numbers/5.png'),
      question: 'Is the sign for "5" made by opening the hand with all fingers extended?',
      answer: 'Yes'
    },
    6: {
      image: require('../assets/images/categories/numbers/6.png'),
      question: 'Does the sign for "6" involve extending the pinky finger while the others are curled?',
      answer: 'Yes'
    },
    7: {
      image: require('../assets/images/categories/numbers/7.png'),
      question: 'Is the sign for "7" made by extending the ring finger along with the thumb?',
      answer: 'Yes'
    },
    8: {
      image: require('../assets/images/categories/numbers/8.png'),
      question: 'Does the sign for "8" involve extending the middle finger along with the thumb?',
      answer: 'Yes'
    },
    9: {
      image: require('../assets/images/categories/numbers/9.png'),
      question: 'Is the sign for "9" made by extending the index finger and curling the other fingers?',
      answer: 'Yes'
    },
    10: {
      image: require('../assets/images/categories/numbers/10.png'),
      question: 'Does the sign for "10" involve both hands with all fingers extended?',
      answer: 'Yes'
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
      answer: 'Yes'
    },
    Cat: {
      video: require('../assets/images/categories/animals/Cat.mp4'),
      question: 'Is the sign for "Cat" made by mimicking whiskers with your thumb and index finger?',
      answer: 'Yes'
    },
    Dog: {
      video: require('../assets/images/categories/animals/Dog.mp4'),
      question: 'Does the sign for "Dog" involve patting your leg and snapping your fingers?',
      answer: 'Yes'
    },
    Tiger: {
      video: require('../assets/images/categories/animals/Tiger.mp4'),
      question: 'Is the sign for "Tiger" made by extending your fingers and pulling them away from your face?',
      answer: 'Yes'
    },
  },
  physicalActivities: {
    Dancing: {
      video: require('../assets/images/categories/physical_activities/Dancing.mp4'),
      question: 'Does the sign for "Dancing" involve swaying your hands side to side in a rhythmic motion?',
      answer: 'Yes'
    },
    Jumping: {
      video: require('../assets/images/categories/physical_activities/Jumping.mp4'),
      question: 'Is the sign for "Jumping" made by holding both hands flat and moving them upwards?',
      answer: 'Yes'
    },
    Playing: {
      video: require('../assets/images/categories/physical_activities/Playing.mp4'),
      question: 'Does the sign for "Playing" involve forming a "Y" shape with your hands and moving them in circles?',
      answer: 'Yes'
    },
    Running: {
      video: require('../assets/images/categories/physical_activities/Running.mp4'),
      question: 'Is the sign for "Running" made by moving your hand in a forward motion while forming an "L" shape?',
      answer: 'Yes'
    },
    Walking: {
      video: require('../assets/images/categories/physical_activities/Walking.mp4'),
      question: 'Does the sign for "Walking" involve moving your hands alternately as if taking steps?',
      answer: 'Yes'
    },
  },
  greetings: {
    Goodmorning: {
      video: require('../assets/images/categories/greetings_and_phrases/Goodmorning.mp4'),
      question: 'Is the sign for "Good Morning" performed by raising your flat dominant hand from your chest?',
      answer: 'Yes'
    },
    Goodnight: {
      video: require('../assets/images/categories/greetings_and_phrases/Goodnight.mp4'),
      question: 'Does the sign for "Good Night" involve forming a "C" shape with both hands?',
      answer: 'Yes'
    },
    'Happy birthday': {
      video: require('../assets/images/categories/greetings_and_phrases/Happy birthday.mp4'),
      question: 'Is the sign for "Happy Birthday" made by patting your chest and then moving your hand towards your mouth?',
      answer: 'Yes'
    },
    'I_m sorry': {
      video: require('../assets/images/categories/greetings_and_phrases/I_m sorry.mp4'),
      question: 'Does the sign for "I\'m Sorry" involve making a fist and rubbing it over your chest in a circular motion?',
      answer: 'Yes'
    },
    'Nice to meet you': {
      video: require('../assets/images/categories/greetings_and_phrases/Nice to meet you.mp4'),
      question: 'Is the sign for "Nice to Meet You" performed by sliding one hand forward and bringing both index fingers together?',
      answer: 'Yes'
    },
    Please: {
      video: require('../assets/images/categories/greetings_and_phrases/Please.mp4'),
      question: 'Does the sign for "Please" involve placing your dominant hand on your chest and moving it in a circular motion?',
      answer: 'Yes'
    },
    'Thank you': {
      video: require('../assets/images/categories/greetings_and_phrases/Thank you.mp4'),
      question: 'Is the sign for "Thank You" made by moving your hand away from your mouth as if blowing a kiss?',
      answer: 'Yes'
    },
  },
};

export default function Quiz() {
  const navigation = useNavigation<NavigationProp>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [score, setScore] = useState(1);
  const [category] = useState<keyof typeof quizData>('animals'); // Change category here as needed
  const questions = getQuizData(category);

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 2);
    }
    if (currentQuestionIndex < questions.length - 2) {
      setCurrentQuestionIndex(currentQuestionIndex + 2);
    } else {
      // Navigate to results or show final score
      alert(`Quiz completed! Your score: ${score + 2}/${questions.length}`);
      // Reset for new quiz or navigate to another screen
      setCurrentQuestionIndex(1);
      setScore(1);
    }
  };

  return (
    <ThemedView style={styles.FullScreenContainer}>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.questionTitle}>
          Question:
        </ThemedText>
        <ThemedText style={styles.questionText}>{questions[currentQuestionIndex].question}</ThemedText>
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
    width: "94%",
    minHeight: 200, // Use minHeight instead of a fixed height
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
    paddingBottom: 20, // Add padding at the bottom for better spacing
  },
  questionTitle: {
    color: "green",
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 90,
    textAlign: 'center',
  },
  questionText: {
    color: "black",
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 21,
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
  videoButton: {
    backgroundColor: '#FFDD68',
    padding: 16,
    borderRadius: 11,
    marginVertical: 21,
  },
  videoButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#334',
  },
  scoreText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 21,
  },
});
