import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import { MdMenuOpen, MdOutlineMailOutline } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100 ">
          <div className="row d-flex align-items-center w-100">
            <div className="col-sm-2 part1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={logo} className="logo" alt="text" />
                <span className="ml-2">HOTASH</span>
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
              <Button className="rounded-circle mr-3">
                <MdMenuOpen></MdMenuOpen>
              </Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
              <Button className="rounded-circle mr-3">
                <MdOutlineLightMode />
              </Button>
              <Button className="rounded-circle mr-3">
                <IoCartOutline />
              </Button>
              <Button className="rounded-circle mr-3">
                <MdOutlineMailOutline />
              </Button>
              <Button className="rounded-circle mr-3">
                <FaRegBell />
              </Button>

              <div className="myAccWrapper">
                <Button className="myAcc d-flex align-items-center">
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                    </span>
                  </div>

                  <div className="userInfo">
                    <h4>
                      laraib siddiqui
                    </h4>
                    <p className="mb-0">@mrsddq</p>
                  </div>

                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
