// middleware/workingHours.js
module.exports = (req, res, next) => {
    const currentDate = new Date();
    const day = currentDate.getDay();
    const hour = currentDate.getHours();
  
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next();
    } else {
      res.send('Sorry, the web application is only available during working hours (Monday to Friday, from 9 to 17).');
    }
  };
  