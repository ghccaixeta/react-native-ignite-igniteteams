import { TouchableOpacityProps } from 'react-native';
import {Container, Title, Icon} from './styles'

//Com o TouchableOpacityProps conseguimos utilizar as propiedades de um botão
type Props = TouchableOpacityProps & {

    title: string;

}

export function GroupCard({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Icon></Icon>
            <Title>
                {title}
            </Title>
        </Container>
    )
}