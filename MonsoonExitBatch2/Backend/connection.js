const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://userone:userone@cluster0.tsd7ugt.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0').then(async () => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
