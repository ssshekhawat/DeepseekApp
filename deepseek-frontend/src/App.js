import React, { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSend = async () => {
    setLoading(true);
    setError(null);
    setResponse("");

    try {
      const res = await axios.post("http://localhost:5000/api/deepseek", {
        prompt: input,
      });

      // Assuming DeepSeek-R1 returns a structure like OpenAI API
      const completion = res.data.choices?.[0]?.message?.content || "No response received.";
      setResponse(completion);
    } catch (error) {
      console.error("Error:", error.message);
      setError("Failed to fetch response. Please check the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h2>DeepSeek-R1 Chat</h2>

      <textarea
        rows="4"
        cols="50"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your prompt..."
        style={{ padding: "10px", fontSize: "16px", width: "80%" }}
      />
      <br />

      <button 
        onClick={handleSend} 
        disabled={loading} 
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "10px",
          cursor: loading ? "not-allowed" : "pointer",
          backgroundColor: loading ? "#ccc" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        {loading ? "Generating..." : "Send"}
      </button>

      <h3>Response:</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <pre style={{ background: "#f4f4f4", padding: "10px", borderRadius: "5px", textAlign: "left" }}>
        {response || "No response yet."}
      </pre>
    </div>
  );
}

export default App;
