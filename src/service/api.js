import axios from 'axios';

export default axios.create({
  baseURL: `foodise-gpa-be2.herokuapp.com/api/`
});