import { Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { PrincipalPage } from './PrincipalPage';
import { ProjectsPage } from '../../pages/projects/ProyectsPage';

export const Content = () => {
    return(
        <Box
        minH="100vh"
        w="100vw"
        p={4}
        boxSizing='border-box'
        overflow='hidden'
        >
            <Routes>
                <Route path='/' element={<ProjectsPage/>}/>
                <Route path='/projets' element={<ProjectsPage/>}/>
            </Routes>
        </Box>
    )
}