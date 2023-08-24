import NewPostForm from '../../components/form/NewPostForm';
import Container from '../../components/UI/container/Container';
// prideti puslapi i headeri
// i app jsx
// i sita puslapi ikelti forma

export default function AddPostPage() {
  return (
    <Container>
      <h1>Create new post</h1>
      <NewPostForm />
    </Container>
  );
}
