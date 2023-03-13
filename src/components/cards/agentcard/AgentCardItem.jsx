import { useEffect } from 'react'
import { AgentCardLarge } from './AgentCardLarge';
import { AgentCardMedium } from './AgentCardMedium';
import { useMediaQuery } from '@chakra-ui/react'

export const AgentCardItem = (agent) => {

  const [isLargerThan650] = useMediaQuery("(max-width: 650px)");

  useEffect(() => {
    if (!isLargerThan650) return;
  }, [isLargerThan650]);



  return (<>{isLargerThan650 ? <AgentCardMedium agent={agent} /> : <AgentCardLarge agent={agent} />}</>)

}
