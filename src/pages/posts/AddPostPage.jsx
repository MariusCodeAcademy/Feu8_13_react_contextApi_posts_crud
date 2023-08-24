import React from 'react';
import NewPostForm from '../../components/form/NewPostForm';
// prideti puslapi i headeri
// i app jsx
// i sita puslapi ikelti forma
export default function AddPostPage() {
  return (
    <div>
      AddPostPage
      <NewPostForm onSuccess={() => {}} />
    </div>
  );
}
