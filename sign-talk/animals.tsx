import react from 'react';
import { stylesheet, touchableopacity } from 'react-native';
import { themedtext } from '@/components/themedtext';
import { themedview } from '@/components/themedview';
import { usenavigation } from '@react-navigation/native';
import { nativestacknavigationprop } from '@react-navigation/native-stack';

// define the type for the navigation stack
type rootstackparamlist = {
  'sign video': { video: any; title: string; description: string }; // use 'any' for video type
};

// define the navigation prop
type navigationprop = nativestacknavigationprop<rootstackparamlist, 'sign video'>;

// define the type for video object
interface videodata {
  video: any;
  title: string;
  description: string;
}

// map each greeting/phrase to its corresponding video and hardcoded description
const video_data: record<string, videodata> = {
  goodmorning: {
    video: require('../assets/images/categories/greetings_and_phrases/goodmorning.mp4'),
    title: 'good morning',
    description: 'sign "good morning": start with your dominant hand flat, fingers together, and raise it from your chest upwards, as if to mimic the rising sun.',
  },
  goodnight: {
    video: require('../assets/images/categories/greetings_and_phrases/goodnight.mp4'),
    title: 'good night',
    description: 'sign "good night": form a "c" shape with both hands, and gently lower one hand over the other as if covering something.',
  },
  'happy birthday': {
    video: require('../assets/images/categories/greetings_and_phrases/happy birthday.mp4'),
    title: 'happy birthday',
    description: 'sign "happy birthday": start by patting your chest with both hands, and then move your dominant hand towards your mouth, mimicking blowing out a candle.',
  },
  'i_m sorry': {
    video: require('../assets/images/categories/greetings_and_phrases/i_m sorry.mp4'),
    title: 'i\'m sorry',
    description: 'sign "i\'m sorry": make a fist with your dominant hand and rub it in a circular motion over your chest.',
  },
  'nice to meet you': {
    video: require('../assets/images/categories/greetings_and_phrases/nice to meet you.mp4'),
    title: 'nice to meet you',
    description: 'sign "nice to meet you": place one hand palm down and slide it forward, then bring both index fingers together, pointing towards the person you are greeting.',
  },
  please: {
    video: require('../assets/images/categories/greetings_and_phrases/please.mp4'),
    title: 'please',
    description: 'sign "please": place your dominant hand on your chest and move it in a circular motion.',
  },
  'thank you': {
    video: require('../assets/images/categories/greetings_and_phrases/thank you.mp4'),
    title: 'thank you',
    description: 'sign "thank you": place your fingers near your mouth and move your hand away, as if blowing a kiss.',
  },
};

export default function greetingsandphrasesscreen() {
  const navigation = usenavigation<navigationprop>();
  const videokeys = object.keys(video_data) as (keyof typeof video_data)[];

  return (
    <themedview style={styles.fullscreencontainer}>
      <themedview style={styles.container}>
        <themedview style={styles.gridcontainer}>
          {videokeys.map((key) => (
            <touchableopacity
              key={key}
              style={styles.griditem}
              onpress={() =>
                navigation.navigate('sign video', {
                  video: video_data[key].video, // pass the video url directly
                  title: video_data[key].title,
                  description: video_data[key].description, // pass the hardcoded description
                })
              }
            >
              <themedtext style={styles.navtext}>{video_data[key].title}</themedtext>
            </touchableopacity>
          ))}
        </themedview>
      </themedview>
    </themedview>
  );
}

const styles = stylesheet.create({
  fullscreencontainer: {
    flex: 1,
    backgroundcolor: '#ffdd67',
  },
  container: {
    flex: 1,
    justifycontent: 'center',
    alignitems: 'center',
    backgroundcolor: '#ffdd67',
  },
  gridcontainer: {
    flexdirection: 'row',
    flexwrap: 'wrap',
    justifycontent: 'center',
    alignitems: 'center',
    width: '90%',
    backgroundcolor: '#ffdd67',
  },
  griditem: {
    textalign: "center",
    padding: 25,
    width: 130,
    height: 130,
    justifycontent: 'center',
    alignitems: 'center',
    margin: 10,
    borderradius: 10,
    backgroundcolor: '#ffffff',
  },
  navtext: {
    justifycontent: 'center',
    alignitems: 'center',
    textalign: "center",
    fontsize: 18,
    fontweight: 'bold',
    color: '#333',
  },
});
