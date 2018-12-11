import { Router } from 'express';
var router = Router();
import tasks from '../models/tasks';


router.get('/results/:selectedColumn', function(req, res, next) {
  tasks.getColumnAttributes((err, data, fiedls) => {
    res.json(data)
    console.log(req.params.selectedColumn)
  }, req.params.selectedColumn)
});

router.get('/columns', function(req, res, next) {
  tasks.getColumns((err, data, fiedls) => {
    res.json(data)
  })
});


export default router;
