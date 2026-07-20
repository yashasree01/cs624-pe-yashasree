import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';

const coreCourses = [
  'CS 504 Software Engineering',
  'CS 506 Programming for Computing',
  'CS 519 Cloud Computing Overview',
  'CS 533 Computer Architecture',
  'CS 547 Secure Systems and Programs',
  'CS 622 Discrete Math and Algorithms for Computing',
  'DS 510 Artificial Intelligence for Data Science',
  'DS 620 Machine Learning & Deep Learning',
];

const depthCourses = [
  'CS 624 Full-Stack Development - Mobile App',
  'CS 628 Full-Stack Development - Web App',
];

const capstoneCourse = 'DS 522 Capstone';

const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image
        source={require('../../assets/images/icon.png')}
        style={styles.icon}
      />
      <Text style={styles.header}>MSCS Courses</Text>

      <Text style={styles.sectionTitle}>Core Requirements (24 credits)</Text>
      {coreCourses.map((course, index) => (
        <Text key={index} style={styles.course}>{course}</Text>
      ))}

      <Text style={styles.sectionTitle}>Depth of Study (6 Credits)</Text>
      {depthCourses.map((course, index) => (
        <Text key={index} style={styles.course}>{course}</Text>
      ))}

      <Text style={styles.sectionTitle}>Capstone</Text>
      <Text style={styles.course}>{capstoneCourse}</Text>

      <Text style={styles.sectionTitle}>Which course did you like?</Text>
      <TextInput
        style={styles.input}
        placeholder="ex. CS624"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />
      {favoriteCourse !== '' && (
        <Text style={styles.favorite}>You picked: {favoriteCourse}</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    width: '100%',
    padding: 10,
    marginTop: 15,
    marginBottom: 5,
  },
  course: {
    fontSize: 15,
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  favorite: {
    marginTop: 5,
    marginBottom: 10,
    fontStyle: 'italic',
    alignSelf: 'flex-start',
  },
});

export default App;