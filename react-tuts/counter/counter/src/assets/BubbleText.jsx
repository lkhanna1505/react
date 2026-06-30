import React, { useState } from "react";
import styles from "./bubble.module.css";

const Example = ({ num }) => {
    return (
        <div className="grid place-content-center bg-black">
            <BubbleText num={num} />
        </div>
    );
};

const BubbleText = ({ num }) => {
    return (
        <h2 className="text-center text-slate-100">
            {("The value is: " + num.toString()).split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                    {child}
                </span>
            ))}
        </h2>
    );
};

export default Example;