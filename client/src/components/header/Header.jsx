import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { MenuToggle } from './MenuToggle';
import { Menu } from './Menu';
import {BiSolidUserCircle} from 'react-icons/bi'
import { useSelector } from 'react-redux';


function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
          ],
          [
            "#nav-link",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" }
          ]
        ]
      : [
          [
            "#nav-link",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" }
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" }
      ],
      ...menuAnimations
    ]);
  }, [isOpen]);

  return scope;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = useSelector((state) => state.user)

  const scope = useMenuAnimation(isOpen);
  return (
    <div>
            <div ref={scope}>
              <Menu />
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
            </div>
        <nav>
          <div className="brand">
            <h1 className='Logo'>JoJe</h1>
          </div>
          <div className="nav-lnks">
            <Link id='nav-lnk'>Home</Link>
            <Link id='nav-lnk'>Blogs</Link>
            <Link id='nav-lnk'>Profile</Link>
            <Link id='nav-lnk'>Contact</Link>
          </div>
          <div className="nav-items">
            <Link id='nav-item' to='register'>
              {currentUser ? (
                <Link id='nav-item' to='/'>Your Blogs</Link>
              ) : "Sign up"}
              </Link>
            <Link to='/profile'>
                {currentUser ?(
                  <BiSolidUserCircle id='user-icon' size={42} />
                ) : 
                 <li className='sm:inline text-slate-700 hover:underline'>Sign in</li>
                }
              </Link>
          </div>
        </nav>
    </div>
  )
}

export default Header