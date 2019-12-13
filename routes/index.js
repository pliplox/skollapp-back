const express = require('express');
const usersController = require('../controllers/usersController');
const loginController = require('../controllers/loginController');
const familyMembersController = require('../controllers/familyMembersController');
const familyGroupsController = require('../controllers/familyGroupsController');
const auth = require('../middlewares/authentication');

const api = express.Router();

// Login
api.post('/signup', auth, loginController.signUp);
api.post('/signin', loginController.signIn);
api.post('/signingoogle', loginController.signInGoogle);
// api.get('/signingithub', loginController.signInGitHub); // TODO: StandBy

// Users
api.get('/getusers', auth, usersController.getUsers);
api.put('/updateuser/:id', auth, usersController.updateUser);
api.post('/createuser', auth, usersController.createUser);
api.delete('/deleteuser/:id', auth, usersController.deleteUser);

// Family Group
api.post('/family/group', auth, familyGroupsController.createFamilyGroup);
api.get('/family/groups', auth, familyGroupsController.getFamilyGroups);
api.get('/family/groups/:groupId', auth, familyGroupsController.getFamilyGroup);
api.put('/family/groups/:groupId', auth, familyGroupsController.updateFamilyGroup);
api.delete('/family/groups/:groupId', auth, familyGroupsController.destroyFamilyGroup);

// Family Members
api.post('/family/member', auth, familyMembersController.createFamilyMember);
api.get('/family/members', auth, familyMembersController.getFamilyMembers);
api.get('/family/members/:memberId', auth, familyMembersController.getFamilyMember);
api.put('/family/members/:memberId', auth, familyMembersController.updateFamilyMember);
api.delete('/family/members/:memberId', auth, familyMembersController.destroyFamilyMember);

module.exports = api;
