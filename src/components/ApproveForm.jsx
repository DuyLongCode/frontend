import React, { useState } from 'react';

const FileApprovalForm = () => {
  const [comments, setComments] = useState('');

  const handleSubmit = (approved) => {
    console.log('File was:', approved ? 'approved' : 'rejected');
    console.log('Comments:', comments);
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{
        fontSize: '16px',
        marginBottom: '20px',
        color: '#333'
      }}>
        You have been asked to approve the file
      </h2>

      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          color: '#666',
          marginBottom: '5px'
        }}>
          Add comments (optional)
        </label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Leave your comments..."
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ff0000',
            borderRadius: '4px',
            minHeight: '80px',
            resize: 'vertical'
          }}
        />
      </div>

      <div style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'space-between'
      }}>
        <button
          onClick={() => handleSubmit(false)}
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #ff0000',
            borderRadius: '4px',
            backgroundColor: '#fff',
            color: '#ff0000',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px'
          }}
        >
          ✕ Reject
        </button>
        <button
          onClick={() => handleSubmit(true)}
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #4CAF50',
            borderRadius: '4px',
            backgroundColor: '#fff',
            color: '#4CAF50',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px'
          }}
        >
          ✓ Approve
        </button>
      </div>
    </div>
  );
};

export default FileApprovalForm;