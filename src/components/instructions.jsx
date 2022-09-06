import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(View)`
  padding: 0rem 2rem 1rem;
`;

const BaseText = styled(Text)`
  font-family: "Open sans"
`;

const H1 = styled(BaseText)`
  font-size: 2.25rem;
  margin: 1.5rem 0;
  font-weight: 600;
`;

const H2 = styled(BaseText)`
  font-size: 1.65rem;
  margin: 1rem 0;
  font-weight: 600;
`;

const P = styled(BaseText)`
  font-size: 1.05rem;
  line-height: 1.55rem;
  margin: 0.5rem 0;
`;

const Hr = styled(View)`
  width: 100%;
  height: 0px;
  border-bottom-width: 1px;
  border-bottom-color: #aaa;
  border-bottom-style: solid;

  margin-bottom: 1rem;
`;

const CodeText = styled(Text)`
  font-size: 0.95rem;
  padding-vertical: 0.05rem;
  font-family: monospace;
  color: #333;
`;

const CommentText = styled(Text)`
  color: #777;
  font-style: italic;
`;

const Code = styled(CodeText)`
  background-color: #F38227bb;
  border-radius: 0.25rem;
`;

const CodeBlock = styled(View)`
  font-family: monospace;
  background-color: #F3822755;
  border: 1px solid #F38227;
  border-radius: 0.25rem;
  color: #333;

  padding: 1rem;
`;

const Instructions = () => {
  return (
    <Container>
      <H1>Salween Interview Challenge</H1>
      <Hr />
      <P>
        Please replicate, as close as you can, the image below using{' '}
        <Code>`react-native-web`</Code>. All the necessary resourses are
        provided below. Feel free to style using any of your familiar tools, we
        have <Code>`styled-components`</Code> installed but you can also use{' '}
        <Code>`StyleSheet`</Code> if you want. Please make sure to submit{' '}
        <b>within 7 days</b> after you receive the link to this challenge.
      </P>

      <H2>Expected Result</H2>
      <Hr />
      <Image
        source={{
          uri: 'https://i.ibb.co/3fvLmJk/Screen-Shot-2565-08-31-at-14-54-54.png',
        }}
        resizeMode="contain"
        style={{
          width: '100%',
          height: 640,
          alignSelf: 'center',
        }}
      />

      <H2>Instructions</H2>
      <Hr />
      <P>
        ● Fork this Stackblitz project into your account
        <br />● Start your implementation in{' '}
        <Code>`/src/components/challenge.jsx`</Code>
        <br />
        ● Get data to display from the link we provided
        <br />● Display derived data using <Code>`FlatList`</Code>,{' '}
        <Code>`name`</Code> on the left, <Code>`team`</Code> on the right
        <br />● Make sure that you follow expected style of the{' '}
        <Code>`FlatList`</Code> item, some of the style values are provided in
        the section below
        <br />● Implement <b>load more items</b> when scrolling to the bottom
        using <Code>`FlatList`</Code> props (need to set <Code>`height`</Code>{' '}
        for this to work)
        <br />● Please also pay attention to <b>sizing</b> and <b>spacing</b>
        <br />● Once you have finished the challenge, please submit the link
        from the share menu (<Code>`Secret (accessible by URL)`</Code>) back to
        our email
        <br />● We will take some time to review your submission and reach out
        to you within 1-2 weeks
      </P>
      <H2>Resources &amp; Assets</H2>
      <Hr />
      <CodeBlock>
        <CodeText>
          <CommentText>
            # data URL <br />
          </CommentText>
          {'https://free-nba.p.rapidapi.com/players?page=1&per_page=10'}
          <br />
          <br />
          <CommentText>
            # request headers <br />
          </CommentText>
          {`{
  "X-RapidAPI-Key": "473c6c45a9msh7d7a1c6e7e83247p11b3fbjsndb18d5346b6e",
  "X-RapidAPI-Host": "free-nba.p.rapidapi.com"
}`}
          <br />
          <br />
          <CommentText>
            # FlatList height <br />
          </CommentText>
          640
          <br />
          <br />
          <CommentText>
            # header image <br />
          </CommentText>
          https://seeklogo.com/images/N/nba-logo-41668C66DB-seeklogo.com.png
          <br />
          <br />
          <CommentText>
            # header image height <br />
          </CommentText>
          120
          <br />
          <br />
          <CommentText>
            # item image <br />
          </CommentText>
          https://logo-logos.com/2017/11/nba-logo.png
          <br />
          <br />
          <CommentText>
            # blue color <br />
          </CommentText>
          rgb(22, 24, 144)
          <br />
          <br />
          <CommentText>
            # red color <br />
          </CommentText>
          rgb(208, 29, 29)
          <br />
          <br />
          <CommentText>
            # team and name font size <br />
          </CommentText>
          25
        </CodeText>
      </CodeBlock>
      <H2>Caveats</H2>
      <Hr />
      <P>
        ● Please make sure to finish the challenge all by yourself <br />●
        Please make sure to <b>read the instructions carefully</b>
      </P>
    </Container>
  );
};

export default Instructions;
