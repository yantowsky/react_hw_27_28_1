import React from 'react';
import { FaMobileAlt, FaTelegramPlane, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contacts = () => {
    return (
        <main className="contacts">
            <div>
                <h1>Contacts:</h1>
                <ul>
                    <li>
                        <a href="tel:+380955020032"><FaMobileAlt /></a>
                    </li>
                    <li>
                        <a href="mailto:it.yantowsky@gmail.com"><SiGmail /></a>
                    </li>
                    <li>
                        <a href="https://t.me/Yantowsky"><FaTelegramPlane /></a>
                    </li>
                    <li>
                        <a href="https://github.com/yantowsky"><FaGithub /></a>
                    </li>
                </ul>


            </div>
        </main>
    );
}

export default Contacts;