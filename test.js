const notifier = require('node-notifier');

// String
notifier.notify('Go empty the dishwasher!');

// Object
notifier.notify({
  'title': 'David Walsh Blog',
  'subtitle': 'Daily Maintenance',
  'message': 'Go approve comments in moderation!',
  'icon': 'dwb-logo.png',
  'contentImage': 'blog.png',
  'sound': 'ding.mp3',
  'wait': true
});
