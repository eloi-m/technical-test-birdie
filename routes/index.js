import { Router } from 'express';
var router = Router();
import tasks from '../models/tasks';

/* GET home page. */
router.get('/', function(req, res, next) {
  tasks.connect((err, data, fiedls) => {
    res.json(data)
  })
//  res.render('index', { title: 'Express' });
});

export default router;
