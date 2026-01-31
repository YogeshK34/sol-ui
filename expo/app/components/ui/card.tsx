import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";

type CardProps = ViewProps & {
  className?: string;
};

type CardHeaderProps = ViewProps & {
  className?: string;
};
type CardContentProps = ViewProps & {
  className?: string;
};

export const Card = ({ className, children, ...props }: CardProps) => (
  <View className={className} {...props} style={[style.card , props.style]}>
    {children}
  </View>
);

export const CardHeader = ({
  className,
  children,
  ...props
}: CardHeaderProps) => (
  <View className={className} {...props} style={[style.cardHeader , props.style]}>
    {children}
  </View>
);

export const CardContent = ({
  className,
  children,
  ...props
}: CardContentProps) => (
  <View className={className} {...props} style={[style.cardContent , props.style]}>
    {children}
  </View>
);


const style = StyleSheet.create({
  card: {
    width:"80%",
    height: "auto",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "black",
  },

  cardHeader: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 2,
  },

  cardContent:{
    marginVertical: 5,
    width: "100%",
    height: 200,
    borderWidth: 0.5,
    borderColor: "gray",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 2,
  }

});
