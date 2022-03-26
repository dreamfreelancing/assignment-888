import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="Footer">
                <p>1.
                At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes.
                Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM. React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred
                </p>
                <p>2.
                State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                </p>
                <p>3.
                useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
                </p>
            </div>
        </div>
    );
};

export default Footer;