import styled from 'styled-components'

export const Titulo = styled.h1`
    text-align: center;
    font-size: 2rem;
    &:hover {
        color: red;
    }
    ${({primary}) => {
        if (primary) {
            return `
                color: blue;
            `
        }
    }}
`