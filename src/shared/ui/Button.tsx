import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

interface ButtonProps {
    children: ReactNode;
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "outline" | "noborder";
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onPress?: () => void;
    disabled?: boolean;
    fullWidth?: boolean;
}

const sizeStyles = {
    sm: { px: 12, py: 8, fontSize: 12 },
    md: { px: 16, py: 10, fontSize: 13 },
    lg: { px: 20, py: 14, fontSize: 15 },
};

const variantStyles = {
    primary: {
        bg: "#E85D04",
        bgPressed: "#C44D03",
        text: "#FFFFFF",
    },
    secondary: {
        bg: "#FEE8D6",
        bgPressed: "#FDDCC4",
        text: "#E85D04",
    },
    outline: {
        bg: "transparent",
        bgPressed: "#FEE8D6",
        text: "#E85D04",
        border: true,
    },
    noborder: {
        bg: "transparent",
        bgPressed: "#FEE8D6",
        text: "#E85D04",
        border: false,
    }
};

const Button: React.FC<ButtonProps> = ({
    children,
    size = "md",
    variant = "primary",
    startIcon,
    endIcon,
    onPress,
    disabled = false,
    fullWidth = false,
}) => {
    const s = sizeStyles[size];
    const v = variantStyles[variant];

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => ({
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                paddingHorizontal: s.px,
                paddingVertical: s.py,
                borderRadius: 12,
                backgroundColor: pressed ? v.bgPressed : v.bg,
                opacity: disabled ? 0.5 : 1,
                alignSelf: fullWidth ? "stretch" : "flex-start",
                // solo para outline — borde sutil
                ...(variant === "outline" && {
                    borderWidth: 1,
                    borderColor: "#E85D04",
                }),
                // solo para noborder — sin borde
                ...(variant === "noborder" && {
                    borderWidth: 0,
                }),
            })}
        >
            {startIcon && <View>{startIcon}</View>}
            <Text
                className="font-poppins"
                style={{
                    fontSize: s.fontSize,
                    fontWeight: "600",
                    color: v.text,
                }}
            >
                {children}
            </Text>
            {endIcon && <View>{endIcon}</View>}
        </Pressable>
    );
};

export default Button;