import { Router } from 'express';
import tasks from '../models/tasks';

const router = Router();


router.get('/results/:selectedColumn', (req, res, next) => {
  tasks.getColumnAttributes((err, data, fields) => {
    res.json(data);
  }, req.params.selectedColumn);
});

router.get('/columns', (req, res, next) => {
  tasks.getColumns((err, data, fields) => {
    res.json(data);
  });
});

router.get('/connect', (req, res, next) => {
  tasks.connect((err, data, fields) => {
    res.json(data);
  });
});

export default router;
