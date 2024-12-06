import React, {eEffect, useState} from 'react';
import {Select, MenuItem, FormControl, InputLabel} from "@mui/material";

const SelectSkill = () => {
    const fetchData = async() => {
        try{
            const response = await fetch("http://localhost:8080/skills");
            const result = await response.json();
            if(!response.ok){
                throw new Error("Server response was not ok.");

            }
            const result = await response.json();
        }
    }
}