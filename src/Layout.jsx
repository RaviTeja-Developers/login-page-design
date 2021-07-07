import React from "react";
import { Link } from "react-router-dom";

function Layout(props) {
    return (
        <div>
            {props.isSideBar &&
                <div class="sidebar" id="sidebar">
                    <ul>
                        <li >
                            <Link activeClassName="active" to="/Account">Account Information</Link>

                        </li>
                        <li>
                            <Link activeClassName="active" to="/Dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </div>
            }
            {props.children}

        </div>
    );
}

export default Layout;
