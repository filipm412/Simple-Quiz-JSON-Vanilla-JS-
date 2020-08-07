function doQuizAgain () {

        

    return resetButton.addEventListener("click", function() {

          localStorage.removeItem('Answer1');
          localStorage.removeItem('Answer2');
          localStorage.removeItem('Answer3');
          localStorage.removeItem('Answer4');

          location.reload(true);


      });
  };