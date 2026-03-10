import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    {
        path: "",
        component: About
    },
    {
        path: "skills",
        component: Skills
    },
    {
        path: "projects",
        component: Projects
    },
    {
        path: "contact",
        component: Contact
    },
];
