"use client";

import React from "react";

export default function LoginPage() {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f3f4f6",
        }}>
            <div style={{
                width: "100%",
                maxWidth: 420,
                background: "#ffffff",
                padding: 24,
                borderRadius: 12,
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
            }}>
                <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, textAlign: "center" }}>
                    Đăng nhập
                </h1>

                <form style={{ display: "grid", gap: 12 }}>
                    <div>
                        <label style={{ display: "block", marginBottom: 4, fontSize: 14 }}>Tài khoản</label>
                        <input
                            type="text"
                            placeholder="Nhập tài khoản"
                            style={{
                                width: "100%",
                                padding: "8px 10px",
                                borderRadius: 6,
                                border: "1px solid #d1d5db",
                                fontSize: 14,
                            }}
                        />
                    </div>

                    <div>
                        <label style={{ display: "block", marginBottom: 4, fontSize: 14 }}>Mật khẩu</label>
                        <input
                            type="password"
                            placeholder="Nhập mật khẩu"
                            style={{
                                width: "100%",
                                padding: "8px 10px",
                                borderRadius: 6,
                                border: "1px solid #d1d5db",
                                fontSize: 14,
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            marginTop: 8,
                            width: "100%",
                            padding: "8px 10px",
                            borderRadius: 999,
                            border: "none",
                            background: "#000000",
                            color: "#ffffff",
                            fontWeight: 600,
                            fontSize: 14,
                            cursor: "pointer",
                        }}
                    >
                        Đăng nhập
                    </button>
                </form>
            </div>
        </div>
    );
}
