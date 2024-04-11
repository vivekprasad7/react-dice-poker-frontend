const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
export const getImageUrl = () => {
    const randomGender = Math.random() < 0.5 ? "men" : "women";
    const randomImageNumber = getRandomNumber(1, 50);
    return `https://randomuser.me/api/portraits/${randomGender}/${randomImageNumber}.jpg`;
  };
  

export const images = [
    "https://randomuser.me/api/portraits/women/9.jpg",
    "https://randomuser.me/api/portraits/men/29.jpg",
    "https://randomuser.me/api/portraits/women/13.jpg"
]
  