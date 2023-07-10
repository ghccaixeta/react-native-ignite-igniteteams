import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupsGetAll";

export function Groups() {
  
  const navigation = useNavigation();

  const [groups, setGroups] = useState<string[]>([
    "Turma do Fortnite"
  ]);

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error)
    }
  }
  
  function handleNewGroup() {
    navigation.navigate('new');
  }


  useFocusEffect(useCallback(()=>{
    fetchGroups()
  },[]))

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={()=><ListEmpty message="Que tal cadastrar a primeira turma?"/>}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup}></Button>

    </Container>
  );
}
