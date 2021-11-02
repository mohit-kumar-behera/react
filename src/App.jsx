import React from 'react';

// // 1) COMMENT PROJECT
// import ApprovalCard from './components/ApprovalCard';
// import CommentDetail from './components/CommentDetail';
// const App = () => {
//   return (
//     <div className="ui container comments">
//       <ApprovalCard>
//         <CommentDetail
//           img="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
//           author="Mohit"
//           date="Today @ 5pm"
//           comment="This is good"
//         />
//       </ApprovalCard>

//       <ApprovalCard>
//         <CommentDetail
//           img="https://avatarfiles.alphacoders.com/242/thumb-1920-242300.jpg"
//           author="Karan Shetty"
//           date="Today @ 4:30pm"
//           comment="who are you?"
//         />
//       </ApprovalCard>

//       <ApprovalCard>
//         <CommentDetail
//           img="https://www.shareicon.net/data/512x512/2016/09/15/829444_man_512x512.png"
//           author="BHatinda EXpress"
//           date="Today @ 3am"
//           comment="Hi there this is a text"
//         />
//       </ApprovalCard>
//     </div>
//   );
// };

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// // 2) WEATHER PROJECT
// import SeasonDisplay from './components2/SeasonDisplay';
// import Spinner from './components2/Spinner';
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     // Initializing State
//     this.state = { latitude: null, errorMessage: '' };
//   }

//   componentDidMount() {
//     // Getting Location
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({ latitude: position.coords.latitude });
//       },
//       (err) => {
//         this.setState({ errorMessage: err.message });
//       }
//     );
//   }

//   renderContent() {
//     if (!this.state.errorMessage && this.state.latitude)
//       return <SeasonDisplay latitude={this.state.latitude} />;

//     if (this.state.errorMessage && !this.state.latitude)
//       return <div>Error: {this.state.errorMessage}</div>;

//     return <Spinner message="Please Allow Location" />;
//   }

//   render() {
//     return (
//       <div style={{ border: '10px solid red' }}>{this.renderContent()}</div>
//     );
//   }
// }

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// 3) API fetch Project
// import axios from 'axios';
// import SearchBar from './components3/SearchBar';
// import ImageList from './components3/ImageList';
// class App extends React.Component {
//   state = { images: [], showSpinner: false };

//   async handleSubmit(term) {
//     // Show Spinner
//     this.setState({ showSpinner: true });

//     // Fetch Data
//     const res = await axios.get('https://api.unsplash.com/search/photos', {
//       params: {
//         query: term,
//       },
//       headers: {
//         Authorization: `Client-ID kKM27V1ig5_uzni2DUpItanzEysBiS1PVf_CTJCLQVQ`,
//       },
//     });

//     this.setState({ images: res.data.results });

//     // Hide Spinner
//     this.setState({ showSpinner: false });
//   }

//   render() {
//     return (
//       <div>
//         <SearchBar
//           submitFormHandler={this.handleSubmit.bind(this)}
//           showSpinner={this.state.showSpinner}
//         />
//         <ImageList images={this.state.images} />
//       </div>
//     );
//   }
// }

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// 4) Accordion Project
// import Accordion from './components4/Accordion';

// const items = [
//   {
//     title: 'What are the differences between functional and class components?',
//     content:
//       'Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on feature basis. After the introduction of Hooks, functional components are equivalent to class components.',
//   },
//   {
//     title: 'Why was virtual DOM introduced?',
//     content:
//       'DOM manipulation is an iwindow.location.pathnamentegral part of any web application, but DOM manipulation is quite slow when compared to other operations in JavaScript. The efficiency of the application gets affected when several DOM manipulations are being done. Most JavaScript frameworks update the entire DOM even when a small part of the DOM changes.     For example, consider a list that is being rendered inside the DOM. If one of the items in the list changes, the entire list gets rendered again instead of just rendering the item that was changed/updated. This is called inefficient updating. ',
//   },
//   {
//     title:
//       'What are the differences between controlled and uncontrolled components?',
//     content:
//       ' In a controlled component, the value of the input element is controlled by React. We store the state of the input element inside the code, and by using event-based callbacks, any changes made to the input element will be reflected in the code as well',
//   },
//   {
//     title: 'What are the different lifecycle methods in React?',
//     content:
//       ' Every component in React has lifecycle methods that we can tap into, to trigger changes at a particular phase of the life cycle.',
//   },
// ];

// class App extends React.Component {
//   render() {
//     return <Accordion items={items} />;
//   }
// }

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// 5) WIKI SEARCH Project
// import Search from './components5/Search';
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Search />
//       </div>
//     );
//   }
// }

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// Implementing 3, 4 and 5 together using navigation
import axios from 'axios';
import SearchBar from './components3/SearchBar';
import ImageList from './components3/ImageList';
import Accordion from './components4/Accordion';
import Search from './components5/Search';
import Header from './components6/Header';
import Route from './components6/Route';

const items = [
  {
    title: 'What are the differences between functional and class components?',
    content:
      'Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on feature basis. After the introduction of Hooks, functional components are equivalent to class components.',
  },
  {
    title: 'Why was virtual DOM introduced?',
    content:
      'DOM manipulation is an integral part of any web application, but DOM manipulation is quite slow when compared to other operations in JavaScript. The efficiency of the application gets affected when several DOM manipulations are being done. Most JavaScript frameworks update the entire DOM even when a small part of the DOM changes.     For example, consider a list that is being rendered inside the DOM. If one of the items in the list changes, the entire list gets rendered again instead of just rendering the item that was changed/updated. This is called inefficient updating. ',
  },
  {
    title:
      'What are the differences between controlled and uncontrolled components?',
    content:
      ' In a controlled component, the value of the input element is controlled by React. We store the state of the input element inside the code, and by using event-based callbacks, any changes made to the input element will be reflected in the code as well',
  },
  {
    title: 'What are the different lifecycle methods in React?',
    content:
      ' Every component in React has lifecycle methods that we can tap into, to trigger changes at a particular phase of the life cycle.',
  },
];

class App extends React.Component {
  state = { images: [], showSpinner: false };

  async handleSubmit(term) {
    // Show Spinner
    this.setState({ showSpinner: true });

    // Fetch Data
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
      },
      headers: {
        Authorization: `Client-ID kKM27V1ig5_uzni2DUpItanzEysBiS1PVf_CTJCLQVQ`,
      },
    });

    this.setState({ images: res.data.results });

    // Hide Spinner
    this.setState({ showSpinner: false });
  }

  render() {
    return (
      <div>
        <Header />
        <Route path="/">
          <SearchBar
            submitFormHandler={this.handleSubmit.bind(this)}
            showSpinner={this.state.showSpinner}
          />
          <ImageList images={this.state.images} />
        </Route>
        <Route path="/accordion">
          <Accordion items={items} />
        </Route>
        <Route path="/wiki">
          <Search />
        </Route>
      </div>
    );
  }
}

export default App;
