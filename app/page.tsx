'use client'
import { useState, useEffect } from "react"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { ConfigProvider, Space } from "antd"
import { useRouter } from "next/navigation"
import { useLoginTodoQuery } from "./services/pokemon"

const Login = () => {
  const [show, setShow] = useState(false)
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [submit, setSubmit] = useState(false)
  const router = useRouter()

  const { data } = useLoginTodoQuery(
    submit
      ? { email: userName, password }
      : { email: "", password: "" }
  )

  useEffect(() => {
    if (submit && data && data.length === 1) {
      localStorage.setItem("user", JSON.stringify(data[0]))
      router.push("/pages/home")
    }
  }, [submit, data, router])

  const handleLogin = () => {
    if (userName === "SuperAdmin" && password === "SuperAdmin2026") {
      setSubmit(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6">Log in</h1>

        <div className="relative mb-4">
          <UserOutlined className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
          <input
            value={userName}
            onChange={e => setUserName(e.target.value)}
            placeholder="Username"
            className="w-full bg-white rounded-md px-12 py-3 border"
          />
        </div>

        <div className="relative mb-2">
          <LockOutlined className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
          <input
            type={show ? "text" : "password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-white rounded-md px-12 py-3 border"
          />
        </div>

        <ConfigProvider>
          <Space direction="vertical" className="w-full">
            <button
              disabled={!userName || !password}
              onClick={handleLogin}
              className="h-12 text-lg font-semibold mt-[20px] rounded-md w-full text-white bg-[#2563EB]"
            >
              Log in
            </button>
          </Space>
        </ConfigProvider>
      </div>
    </div>
  )
}

export default Login
