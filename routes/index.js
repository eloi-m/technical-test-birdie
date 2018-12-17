import { Router } from 'express';
var router = Router();
import tasks from '../models/tasks';


router.get('/results/:selectedColumn', function(req, res, next) {
  tasks.getColumnAttributes((err, data, fiedls) => {
    res.json(data)
  }, req.params.selectedColumn)
});

router.get('/columns', function(req, res, next) {
  tasks.getColumns((err, data, fiedls) => {
    res.json(data)
  })
});

router.get('/connect', function(req, res, next) {
  tasks.connect((err, data, fiedls) => {
    res.json(data)
  })
});

export default router;
