import express from "express";
// Make sure the path is correct and matches the named export
import { allUsers, singleUser } from "../controllers/userController.js";
import { isAdmin, isAuthenticated } from "../middleware/auth.js";
import { editUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

//=============//
// User routes //
//=============//

// Admin user roles //
//=================//

// /api/myProfile
router.get('/allusers', isAuthenticated, isAdmin, allUsers);

// /api/admin/user/delete/id
router.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser);

// Normal user//
//============//

// /api/user/id
// router.get('/user/:id', isAuthenticated, singleUser);

// using req.query(), /api/user?id=
// This version expects an `id` as a query parameter instead of a route parameter.
router.get('/user', isAuthenticated, singleUser);

// /api/user/edit/id
router.put('/user/edit/:id', isAuthenticated, editUser);


export default router;