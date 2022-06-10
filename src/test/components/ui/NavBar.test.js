import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../../../components/ui/NavBar";
import { AuthContext } from "../../../auth/authContext";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('Pruebas en el <NavBar />', () => {

    const contextValue = {
        user : {
            logged: true,
            name: 'Pedro'
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={ <Navbar /> } />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('Debe de mostrarse conrrectamente', () => {

        expect(wrapper).toMatchSnapshot();

        expect( wrapper.find('.text-info').text().trim()).toBe('Pedro')
    });

    test('Debe de llamar el logout, llamar el navigate y el dispatch con los argumentos', () => {

        wrapper.find('button').prop('onClick')()

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        })

        expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true })
    })
})