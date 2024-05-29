
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample data
const courses = [
  {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: '/c1.png',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
      }
    ],
    students: [
      { id: 101, name: 'Alice Johnson', email: 'alice@example.com' },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com' }
    ]
  },

  {
    id: 2,
    name: 'Introduction to Flutter',
    instructor: 'Signal Fox',
    description: 'Learn the basics of Flutter development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: '/c2.png',
    duration: '9 weeks',
    schedule: 'Tuesdays and Saturdays, 5:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic Dart and Java Knowledge', 'Familiarity with Android Studio'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Flutter',
        content: 'Overview of Flutter, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using Flutter components.'
      }
    ],
    students: [
      { id: 101, name: 'Sudhanshu', email: 'sudhanshu@example.com' },
      { id: 102, name: 'Harsh Kotary', email: 'Harko@example.com' }
    ]
  },

  {
    id: 3,
    name: 'Introduction to React Native',
    instructor: 'Popular Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: '/c1.png',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
      }
    ],
    students: [
      { id: 101, name: 'Alice Johnson', email: 'alice@example.com' },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com' }
    ]
  },

  {
    id: 4,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: '/c1.png',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
      }
    ],
    students: [
      { id: 101, name: 'Alice Johnson', email: 'alice@example.com' },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com' }
    ]
  },

  {
    id: 5,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: '/c1.png',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
      }
    ],
    students: [
      { id: 101, name: 'Alice Johnson', email: 'alice@example.com' },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com' }
    ]
  },
  // Additional course objects...
];

// Routes
app.get('/courses', (req, res) => {
  res.json(courses);
});

app.get('/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (course) {
    res.json(course);
  } else {
    res.status(404).send('Course not found');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
