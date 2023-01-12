import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from 'react';
import {render, screen} from "@testing-library/react";
import App from "../App";



let state = {
    posts: [
        {id: 1, message: 'it\'s My first post', likesCount: 12},
        {id: 2, message: 'Hi, how are you?', likesCount: 15},
        {id: 3, message: 'Hi, how ?', likesCount: 152},
        {id: 4, message: 'What?', likesCount: 159},
        {id: 5, message: 'What is your name?', likesCount: 1529},
    ],
};

test('length of posts should be incremented', () => {
    //test data
    let action = addPostActionCreator('It-kamasutra.com');
    //action
    let newState = profileReducer(state, action);
    //expectation
    expect(newState.posts.length ).toBe(6);
});

test(`message of new post should be correct`, () => {
    let action = addPostActionCreator('It-kamasutra.com');


    let newState = profileReducer(state, action);

    expect(newState.posts[5].message ).toBe('It-kamasutra.com');
});

test(`after deleting length of messages should be decrement`, () => {
    let action = deletePost(1);


    let newState = profileReducer(state, action);

    expect(newState.posts.length ).toBe(4);
});

test(`after deleting length shouldn't decrement if id is incorrect`, () => {
    let action = deletePost(1000);


    let newState = profileReducer(state, action);

    expect(newState.posts.length ).toBe(5);
});


