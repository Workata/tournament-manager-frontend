import axios from 'axios';
import { Category } from '../models/Category';

export const getCategories = async (setCategories) => {
  axios.get('/categories/').then( (res) => {
    // console.log(res.data);
    var categories = res.data;
    var categoriesObjects = [];

    categories.forEach(category => {
      categoriesObjects.push(new Category(category))
    });

    // console.log(categoriesObjects);
    setCategories(categoriesObjects);
    }
  )
}