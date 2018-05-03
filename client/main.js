//https://guide.meteor.com/react.html#using-react-router

import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppContainer from './App.js';
import PageContainer from './Page.js';


FlowRouter.route('/', {
  name: 'Home',
  action() {
    mount(AppContainer, {
      main: <PageContainer />,
    });
  },
});

FlowRouter.route('/chat/:_id', {
  name: 'Video Chat',
  action(params) {
    mount(AppContainer, {
      main: <PageContainer page="chat" room={params._id} />,
    });
  },
});