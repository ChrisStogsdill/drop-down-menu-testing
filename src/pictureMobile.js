export default function pictureMobile() {
  const mobileDots = document.getElementById('mobile-dots-container').children;
  const pictureList = document.querySelectorAll('.mobile-picture');
  // find the current active picture
  function findCurrentActiveMobilePicture() {
    for (let i = 0; i < pictureList.length; i += 1) {
      const pictureClassList = pictureList[i].classList.value;
      if (pictureClassList.includes('mobile-picture-active')) {
        // output the index location and the node element of the
        // current active picture
        const output = { index: i, node: pictureList[i] };
        return output;
      }
    }
    // return error in case for loop fails
    return 'no active nodes';
  }

  // create function to clear all active pictures
  function clearMobileActivePicture() {
    for (let i = 0; i < pictureList.length; i += 1) {
      pictureList[i].classList.remove('mobile-picture-active');
    }
  }

  // creat function to clear selected dot
  function clearMobileDotSelected() {
    for (let i = 0; i < mobileDots.length; i += 1) {
      mobileDots[i].classList.remove('selected-dot');
    }
  }

  // create function to update selected dot
  function updateSelectedDot() {
    const currentPictureIndex = findCurrentActiveMobilePicture().index;
    clearMobileDotSelected();
    mobileDots[currentPictureIndex].classList.add('selected-dot');
  }

  // add eventListener for back button
  const pictureMobileBackButton = document.getElementById('mobile-left-chevron');
  pictureMobileBackButton.addEventListener('click', () => {
    let currentPictureIndex = findCurrentActiveMobilePicture().index - 1;
    // set index to end if it is -1
    if (currentPictureIndex === -1) {
      currentPictureIndex = pictureList.length - 1;
    }
    clearMobileActivePicture();
    pictureList[currentPictureIndex].classList.add('mobile-picture-active');
    updateSelectedDot();
  });

  // create forward function
  function moveToNextPicture() {
    let currentPictureIndex = findCurrentActiveMobilePicture().index + 1;
    // check if it is the last picture
    if (currentPictureIndex > pictureList.length - 1) {
      currentPictureIndex = 0;
    }
    clearMobileActivePicture();
    pictureList[currentPictureIndex].classList.add('mobile-picture-active');
    updateSelectedDot();
  }

  // add eventListner for forward button
  const pictureMobileForwardButton = document.getElementById('mobile-right-chevron');
  pictureMobileForwardButton.addEventListener('click', () => {
    moveToNextPicture();
  });

  // add eventListers for mobile-dots

  for (let i = 0; i < mobileDots.length; i += 1) {
    mobileDots[i].addEventListener('click', () => {
      clearMobileActivePicture();
      pictureList[i].classList.add('mobile-picture-active');
      updateSelectedDot();
    });
  }

  // set the interval for moving forward
  const interval = setInterval(() => {
    moveToNextPicture();
  }, 5000);
}
