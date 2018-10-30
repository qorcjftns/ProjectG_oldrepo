
import { fire, getFireDB } from '../utils/Firebase';

export const loadMap = () => {
	fire();
	var db = getFireDB();
	db.then(res =>{
      console.log("test");
    });
};