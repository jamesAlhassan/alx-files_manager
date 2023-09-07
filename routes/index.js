import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import FilesController from '../controllers/FilesController';
import AuthController from '../controllers/AuthController';

function controllerRouting(app) {
  const router = express.Router();
  app.use('/', router);

  // App Controller

  // should return if Redis is alive and if the DB is alive
  router.get('/status', (req, res) => {
    AppController.getStatus(req, res);
  });

  // should return the number of users and files in DB
  router.get('/stats', (req, res) => {
    AppController.getStats(req, res);
  });

  // Users

  // should create a new user in DB
  router.post('/users', (req, res) => {
    UsersController.postNew(req, res);
  });

  router.get('/users/me', (req, res) => {
    UsersController.getMe(req, res);
  });

  // Auth Controller
  // should sign-in with authentication token
  router.get('/connect', (req, res) => {
    AuthController.getConnect(req, res);
  });

  // Sign Out
  router.get('/disconnect', (req, res) => {
    AuthController.getDisconnect(req, res);
  });

  // Files Controller

  router.post('/files', (req, res) => {
    FilesController.postUpload(req, res);
  });

  router.get('/files/:id', (req, res) => {
    FilesController.getShow(req, res);
  });

  router.get('/files', (req, res) => {
    FilesController.getIndex(req, res);
  });

  router.put('/files/:id/publish', (req, res) => {
    FilesController.putPublish(req, res);
  });
}

export default controllerRouting;
